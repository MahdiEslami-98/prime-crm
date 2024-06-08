/* eslint-disable @next/next/no-img-element */
"use client";
import addPost from "@/api/addPost";
import deletePost from "@/api/deletePost";
import editPost from "@/api/editPost";
import getPosts from "@/api/getPosts";
import getUserInfo from "@/api/getUserInfo";
import Button from "@/components/button";
import DeleteModal from "@/components/deleteModal";
import Input from "@/components/input";
import Logo from "@/components/logo";
import Spinner from "@/components/spinner";
import { addPostReq } from "@/types/addPostReq";
import { ItemsEntity, posts } from "@/types/postsResponse";
import { userInfoRes } from "@/types/userInfoRes";
import getCookie from "@/util/getCookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const AdminPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<userInfoRes>();
  const [posts, setPosts] = useState<posts>();
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  const getUser = async (id: string) => {
    try {
      const res = await getUserInfo(id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async () => {
    try {
      const postResponse = await getPosts();
      setPosts(postResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostHandler = async (id: string) => {
    try {
      await deletePost(id);
      getAllPosts();
      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editPostHandler = async (id: string, data: addPostReq) => {
    try {
      await editPost(id, data);
      getAllPosts();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addPostHandler = async (data: addPostReq) => {
    try {
      await addPost(data);
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && content && category && image && description) {
      setIsError(false);
      const data = {
        title: title,
        content: content,
        category: category,
        image: image,
        desc: description,
      };
      if (isEdit) {
        editPostHandler(postId, data);
        setPostId("");
        setShowModal(false);
      } else {
        addPostHandler(data);
        setShowModal(false);
      }
    } else {
      setIsError(true);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("");
    setImage("");
    setDescription("");
    setPostId("");
    setIsEdit(false);
    setShowModal(false);
  };

  const editHandler = (id: string, post: ItemsEntity) => {
    setShowModal(true);
    setIsEdit(true);
    setPostId(post.id);
    setTitle(post.title);
    setDescription(post.desc);
    setImage(post.image);
    setContent(post.content);
    setCategory(post.category);
  };

  const deleteHandler = (id: string) => {
    deletePostHandler(id);
    setShowDeleteModal(false);
    setPostId("");
  };

  const showDelModal = (id: string) => {
    setShowDeleteModal(true);
    setPostId(id);
  };

  useEffect(() => {
    const userId = getCookie("userId");
    userId && getUser(userId);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="h-full">
      {isLoading && <Spinner />}
      <DeleteModal
        postId={postId}
        setPostId={setPostId}
        deleteHandler={deleteHandler}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <dialog className="" open={showModal}>
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              resetForm();
            }
          }}
          className="fixed left-0 top-0 z-30 h-full w-full bg-[rgba(0,0,0,0.6)]"
        >
          <div className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 sm:w-[600px]">
            <div className="flex items-center justify-between pb-4">
              <p className="font-jost text-head5 font-bold">
                {isEdit ? "Edit Post" : "Create Post"}
              </p>
              <button
                className="rounded border border-[#ccc] px-3 py-1 font-jost font-semibold "
                onClick={() => {
                  resetForm();
                }}
              >
                X
              </button>
            </div>
            <form
              onSubmit={(e) => formSubmit(e)}
              className="flex flex-col gap-y-4"
            >
              <div className="grid grid-cols-2 gap-x-4">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="title">Title</label>
                  <Input
                    id="title"
                    className="rounded-md border border-[#aaa] px-4 py-2 outline-none"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="category">Category</label>
                  <Input
                    id="category"
                    className="rounded-md border border-[#aaa] px-4 py-2 outline-none"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="desc">Description</label>
                <Input
                  id="desc"
                  className="w-full rounded-md border border-[#aaa] px-4 py-2 outline-none"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="image">Image</label>
                <Input
                  id="image"
                  className="w-full rounded-md border border-[#aaa] px-4 py-2 outline-none"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  rows={10}
                  className="w-full resize-none rounded-md border border-[#aaa] px-4 py-2 outline-none"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                ></textarea>
              </div>
              <p
                className={`${isError ? "visible" : "invisible"} text-[14px] text-[#D2042D]`}
              >
                Please fill all the fields correctly
              </p>
              <div className="flex items-center justify-between gap-x-4">
                <Button
                  color="bg-primary-03"
                  text={`${isEdit ? "Edit" : "Create"} Post`}
                  className="w-full border border-primary-03 py-3 font-jost text-head6 font-semibold text-white hover:bg-white hover:text-primary-03"
                  type="submit"
                />
                <Button
                  color="bg-primary-04"
                  text="Cancel"
                  className="w-full border border-primary-04 py-3 font-jost text-head6 font-semibold hover:bg-white hover:text-primary-03"
                  type="reset"
                  onClick={() => {
                    resetForm();
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <div className="container h-full text-primary-03">
        {!isLoading && (
          <div className="flex flex-col gap-y-6 px-4 pt-8">
            <div className="flex items-center justify-between">
              <Logo />
              <Button
                color="bg-primary-03"
                text="Logout"
                className="flex items-center gap-x-2 px-8 py-3 font-jost font-semibold text-white"
                onClick={handleLogout}
              >
                <FaArrowRightFromBracket />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-between gap-x-8 rounded-md bg-gradient-to-r from-primary-01/70 via-primary-04/60 to-primary-02/60 px-6 py-8 md:flex-row-reverse md:py-4">
              <img src="/images/3201587-200.png" alt="" />
              <p className="text-4xl font-bold">
                Welcome back, {user?.username} 👋
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="bg font-jost text-head2 font-semibold">Posts</p>
              <Button
                onClick={() => {
                  setShowModal(true);
                  setIsEdit(false);
                }}
                text="New Post +"
                color="bg-primary-03"
                className="px-8 py-3 font-jost font-semibold text-white"
              />
            </div>
            <div className="flex flex-col gap-y-4 px-4 py-8">
              {posts?.items?.map((post) => (
                <div key={post.id} className="grid grid-cols-12 gap-x-4">
                  <div className="col-span-3 overflow-hidden rounded-lg">
                    <img src={post.image} alt="" className="h-full w-full" />
                  </div>
                  <div className="col-span-9 line-clamp-3 self-center font-open-sans text-head6 font-medium sm:col-span-8">
                    {post.title}
                  </div>
                  <div className="col-span-12 flex items-center justify-center gap-x-6 gap-y-2 py-4 sm:col-span-1 sm:flex-col sm:justify-normal sm:gap-x-0 sm:py-0">
                    <Button
                      text="Edit"
                      color="bg-primary-04"
                      className="w-full py-2 sm:w-28"
                      onClick={() => editHandler(post.id, post)}
                    />
                    <Button
                      text="Delete"
                      color="bg-primary-03"
                      className="w-full py-2 text-white sm:w-28"
                      onClick={() => showDelModal(post.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
