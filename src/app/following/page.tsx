"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAllFollowing } from "@/redux/features/follow.slice";
import CardFollow from "@/components/card-follow/CardFollow";

function page() {
  const dispatch = useAppDispatch();
  const infoUser = useAppSelector(({ sign }) => sign?.user);
  const dataFollow = useAppSelector(({ follow }) => follow);

  useEffect(() => {
    if (infoUser) {
      dispatch(getAllFollowing(infoUser?.idUser));
    }
  }, []);

  return (
    <>
      {dataFollow?.results.map(({ idUser, name, email, picture }) => {
        return (
          <div key={idUser}>
            <CardFollow
              idUser={idUser}
              name={name}
              email={email}
              picture={picture}
            />
          </div>
        );
      })}
    </>
  );
}

export default page;
