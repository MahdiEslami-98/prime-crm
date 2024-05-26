import React from "react";

const ChangelogPage = () => {
  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="container flex flex-col gap-y-[94px] pb-[149.76px] pt-[107px] text-center">
        <div>
          <p className="pb-[14px] font-jost text-head2 font-semibold">
            Changelog
          </p>
          <p className="font-open-sans text-head6 text-[#4e4e4e] dark:text-[#9a9a9a]">
            All changes and updates made to this template will be logged below.
          </p>
        </div>
        <div className="drop-shadow-3xl flex h-[300px] items-center justify-center rounded-[30px] bg-gradient-to-r from-primary-01 to-primary-02 px-4 md:h-[490px] md:px-0">
          <div className="rounded-[20px] bg-white px-[20px] py-[30px] md:px-[119px] md:py-[62px]">
            <p className="font-mulish text-base text-head5 text-[#808080]">
              <span className="pr-[13px] font-jost text-head4 font-extrabold text-[#2f2f2f] md:text-head1">
                V.1
              </span>
              Initial Saasup Webflow Template Release
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPage;
