import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WebIdEdit = () => {
  const { webId } = useParams();
  const [siteAdds, setSiteAdds] = useState({
    id: "",
    sitename: "",
    siteurl: "",
    userid: "",
    password: "",
    comment: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/webids/" + webId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          setSiteAdds(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [webId]);
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8081/webids/" + webId, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(siteAdds),
    })
      .then((res) => {
        alert("성공적으로 수정되었습니다.");
          navigate("/corestone/webids")
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSiteAdds({ ...siteAdds, [name]: value });
  };

  return (
    <div className="container h-full w-full bg-slate-300">
      <div className="text-center pt-16 ">
        <h2 className="text-2xl"> 사이트 정보 수정</h2>
      </div>
      <div className=" w-full mt-8">
        <form
          className="w-5/6 mx-auto  bg-gray-400 rounded-lg "
          onSubmit={handleSubmit}
        >
          <div className=" bg-blue-400 px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  사이트 정보 수정
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  잊을 수 밖에 없는 사이트들의 아이디와 암호를 저장하고 권한이
                  있는 담당자만 등록,수정,삭제 관리하여야 합니다. (외부 직원
                  열람 금지)
                </p>
              </div>
              {/* 입력 폼 */}
              <div className="my-5 md:col-span-2 md:mt-0 ">
                <div className="grid grid-cols-6 gap-6  ">
                  {/* id */}
                  <div className="col-span-6  ">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      value={siteAdds.id}
                      disabled="disabled"
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* 사이트명 */}
                  <div className="col-span-6 ">
                    <label
                      htmlFor="sitename"
                      className="block text-sm font-medium text-gray-700"
                    >
                      사이트명
                    </label>
                    <input
                      type="text"
                      name="sitename"
                      value={siteAdds.sitename}
                      onChange={handleChange}
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* 사이트URL */}
                  <div className="col-span-6">
                    <label
                      htmlFor="siteurl"
                      className="block text-sm font-medium text-gray-700"
                    >
                      URL
                    </label>
                    <input
                      type="text"
                      name="siteurl"
                      value={siteAdds.siteurl}
                      onChange={handleChange}
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                    />
                  </div>
                  {/* 사용자ID */}
                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="userid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      사용자 ID
                    </label>
                    <input
                      type="text"
                      name="userid"
                      value={siteAdds.userid}
                      onChange={handleChange}
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* 사용자 PASSWORD */}
                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      사용자 PASSWORD
                    </label>
                    <input
                      type="text"
                      name="password"
                      value={siteAdds.password}
                      onChange={handleChange}
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* 사이트 설명 */}
                  <div className="col-span-6 ">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      설명
                    </label>
                    <input
                      type="text"
                      name="comment"
                      value={siteAdds.comment}
                      onChange={handleChange}
                      className=" h-8 mt-1 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                onClick={() => navigate("/corestone/webids")}
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium 
                text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                저장
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebIdEdit;
