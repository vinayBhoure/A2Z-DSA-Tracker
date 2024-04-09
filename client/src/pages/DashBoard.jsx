import React from "react";
import { MdLocationSearching } from "react-icons/md";
import Button from "../components/Button";
import CodingLink from "../components/CodingLink";
import SocialMedia from "../components/SocialMedia";
import user from "../components/User.json";

export default function DashBoard() {
  const userData = user[0];
  const total_problems =
    userData.stats.easy_problems +
    userData.stats.medium_problems +
    userData.stats.hard_problems;
  return (
    <div className="bg-white p-4 w-[100%]">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-y-4 md:gap-4">
        {/* Profile Badge */}
        <div className="col-span-1 ">
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted border-2">
                VB
              </span>
            </span>
            <p className="mt-1 text-xl font-semibold">{userData.full_name}</p>
            <p className="m-1 text-gray-500">{userData.user_name}</p>

            <div
              className="w-fit px-2 py-1 bg-[#2f80ed] text-slate-200 font-semibold rounded-lg 
            active:text-slate-600 transform active:-translate-x-0.5 active:-translate-y-0.5 duration-75 active:shadow-md
            hover:bg-blue-600 hover:ring hover:ring-blue-600 ring-offset-1"
            >
              Edit Profile
            </div>
            <div className="flex flex-col items-center mt-4 text-gray-700 text-base font-semibold">
              <span className="p-1 text-center">{userData.collage_name}</span>
              <div className="flex items-center justify-around">
                <MdLocationSearching />
                <span className="ml-1 font-normal">
                  {userData.city}, {userData.state}
                </span>
              </div>
            </div>

            {/* Coding Platform links */}
            <div className="mt-6">
              <p className="text-lg font-semibold mb-2">Coding Platforms</p>
              <CodingLink platform="LeetCode" link={userData.codechef_url} />
              <CodingLink platform="Codeforces" link={userData.leetcode_url} />
              <CodingLink platform="GFG" link={userData.gfg_url} />
            </div>

            {/* Social Media Link */}
            <div className="mt-6">
              <p className="text-lg font-semibold mb-2">Social Media</p>
              <div className="flex justify-around">
                <SocialMedia platform="twitter" link={userData.twitter_url} />
                <SocialMedia platform="linkedin" link={userData.linkedin_url} />
                <SocialMedia platform="github" link={userData.github_url} />
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="col-span-2">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {/* Solved problem stats */}
            <div className="bg-gray-100 col-span-1 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Solved Problems</h3>
              <div className="flex justify-around items-center">
                <div className="text-3xl p-2 ml-2 font-bold rounded-full ring ring-slate-400 ring-offset-2 ring-offset-base-100 ">
                  {total_problems}
                </div>
                <div className="ml-4">
                  <p className="text-green-500">
                    Easy {userData.stats.easy_problems}/{total_problems}
                  </p>
                  <p className="text-yellow-500">
                    Medium {userData.stats.medium_problems}/{total_problems}
                  </p>
                  <p className="text-red-500">
                    Hard {userData.stats.hard_problems}/{total_problems}
                  </p>
                </div>
              </div>
            </div>
            {/* Badges */}
            <div className="bg-gray-100 rounded-lg col-span-1 p-4">
              <h3 className="text-lg font-semibold mb-4">Badges</h3>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">2</div>
                <div>
                  <p className="text-gray-400">Most Recent Badge</p>
                  <p className="text-gray-600">50 Days Badge 2024</p>
                </div>
              </div>
            </div>
            {/* Submissions */}
            <div className="bg-gray-100 rounded-lg p-4 mt-4 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">
                369 submissions in the past one year
              </h3>
              <div className="w-full h-[200px]">
                <div className="w-full h-full"></div>
              </div>
            </div>
            {/* Recent AC */}
            <div className="bg-gray-100 rounded-lg p-4 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Recent AC</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">
                    Largest Rectangle in Histogram
                  </p>
                  <p className="text-gray-400">4 minutes ago</p>
                </div>
                <div>
                  <p className="text-gray-600">Make The String Great</p>
                  <p className="text-gray-400">7 hours ago</p>
                </div>
                <a className="text-blue-500" href="#">
                  View all submissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
