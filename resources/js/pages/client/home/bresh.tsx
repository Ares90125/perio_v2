import React, { useState } from "react";
import axios, { AxiosResponse } from 'axios';
import BreshComponent from "../../../components/breshcomponent";
import DefaultButton from "../../../components/button";
import ToolButton from "../../../components/toolcomponent";
import {  useAppDispatch,useAppSelector } from '../../.././redux/hooks'
import { useNavigate } from "react-router-dom";
import MuiButton from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TypeHeader from "../../../components/type";

const Bresh = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const date=useAppSelector((state) => state.adddate.value);
    const [index_1, setIndex_1] = useState(false);
    const [index_2, setIndex_2] = useState(false);
    const [index_3, setIndex_3] = useState(false);
    const [tabindex, setTabIndex] = useState(0);
    const [time1, settime1] = useState("");
    function setTime(val:number){
        if(tabindex==val){
            setTabIndex(0);
        }
        else{
            setTabIndex(val);
        }
    }
    const create = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({"value": `${Number(index_1)+","+Number(index_2)+","+Number(index_3)}|${tabindex}` });
        try {
            axios.post('/api/client/bresh', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    localStorage.setItem('value','1');
                    navigate('/client/home/');
                } else {
                    handleClickOpen();
                }
            });
        }
        catch (err) {
            handleClickOpen();
        }
    }
    return (
        <div>
            <p className="text-3xl text-mainColor py-4 font-black text-center pb-2">{ "???????????????"}</p>
            <p className="text-base text-mainColor pt-2 font-light text-center pb-2">{"????????????????????????????????????????????????????????????"}</p>
            <TypeHeader text="????????????"/>
            <div className="mx-4">
                <div >
                    <div className="mt-8">
                        <BreshComponent tabindex={tabindex} buttonClick={setTime} />
                    </div>
                    <div className="flex  flex-row items-cneter justify-between mt-8">
                        <ToolButton ispadding={true} size="w-28 h-36" buttonClick={() => { setIndex_1(!index_1) }} text="???????????????" className={index_1 == true ? "bg-btnbgColor text-white" : "bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={index_1 == true ? "bresh.svg" : "bresh-none.svg"} />
                        <ToolButton ispadding={false} size="w-28 h-36" buttonClick={() => { setIndex_2(!index_2) }} text="?????????" className={index_2 == true ? "bg-btnbgColor text-white" : "bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={index_2 == true ? "material.svg" : "material-none.svg"} />
                        <div className="w-28 h-36">
                            <button onClick={()=>{setIndex_3(!index_3);}} className={"flex flex-col justify-center items-center rounded-xl h-full  text-xs w-full  font-black border-transparent "+(index_3 == true ? "bg-btnbgColor text-white" : "bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <img src={"/images/"+(index_3 == true ? "flox.svg" : "flox-none.svg")} alt="Icon" />
                                ????????????<br/>????????????
                            </button>
                        </div>
                    </div>
                    <DefaultButton text="???????????????" buttonClick={() => {
                        create();
                    }}></DefaultButton>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"?????????"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        ?????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <MuiButton onClick={handleClose} autoFocus>
                                ??????
                        </MuiButton>
                        </DialogActions>
                    </Dialog>
                </div>
             </div>
        </div>
    );
};

export default Bresh;
