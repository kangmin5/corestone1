import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./asset/Corestone.png"

const Introduce = () => {
  const [homemenus, setHomeMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/homemenus")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setHomeMenus(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goEmail = () => {
    window.open(
      "http://webmail.corestone.co.kr",
      "width=800,height=600",
      "_blank"
    );
  };
  const goCorestone = () => {
    navigate("/corestone/webapp");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-around items-center ">
      <div>
        <img src={logo} width={300} alt="company" />
      </div>
      <div>
        <div>
          <div className="border-2 px-8 py-4 rounded-lg">
            <h2 className="text-2xl font-medium mb-4">
              코어스톤 대전
            </h2>
            <h5 className="mt-1 font-semibold">* 2023년 목표</h5>
            <p className="mt-1 text-sm text-gray-500">
              1. 중점사업분야 선정 2. 전문기술 선정 3. 자사제품
              중심의 매출 5 곳 확보 4. 매출 15억(기술용역/유지관리:5억 ,
              제품판매:2억, 상품판매:5억)
            </p>
            <h5 className="mt-4 font-semibold"> * 공지사항</h5>
            <p className="text-sm text-gray-900">년말 및 새해 준비 , 종무식/시무식준비 </p>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-6 border-t border-b border-gray-200 py-6 sm:grid-cols-2">
            {homemenus?.map((item) => (
              <li key={item.id} onClick={item.id === 1 ? goEmail : goCorestone}>
                <div
                  className="relative -m-2 flex items-center space-x-4 rounded-xl p-4 focus-within:ring-2
                   focus-within:ring-indigo-500 bg-gray-200 hover:bg-blue-300 "
                >
                  <div
                    className={
                      "flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg"
                    }
                  >
                    <div
                      className="h-6 w-6  bg-blue-400 rounded-full"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <div className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <span className=" font-extrabold">{item.title}</span>
                        <span aria-hidden="true"> &rarr;</span>
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex">
            <Link
              to="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              향후 업무 추가 예정
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Introduce;
