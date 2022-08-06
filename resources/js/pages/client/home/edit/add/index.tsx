import React, { useState, useEffect } from "react";
import {Route,Routes,NavLink, useLocation } from 'react-router-dom';
import Meal from "./meal";
const Adder = () => {
    return (
        <div>
            <p className="text-3xl text-mainColor py-4 font-black text-center pb-2">{ "記録をする"}</p>
            <p className="text-base text-mainColor pt-2 font-light text-center pb-2">{"歯磨きや食事の内容を記録しましょう"}</p>
            <div className="mt-4 border-y border-mainColor mx-4">
                <ul className="flex flex-row -mb-px text-xl font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="basis-1 border-x border-teal-400" role="presentation">
                        <button  className={"border-mainColor text-xl w-full inline-block px-4 py-1  border-b font-black border-transparent text-mainColor bg-white"} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">食事</button>
                    </li>
                </ul>
            </div>
            <div className="mx-4">
                <Meal />
            </div>
        </div>
    );
};

export default Adder;
