import { posts } from "@/types/postsResponse";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://primecrm-back.liara.run");

export default pb;
