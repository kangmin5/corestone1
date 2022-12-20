// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WebIds = () => {
  const [siteData, setSiteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(' http://localhost:8081/webids')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSiteData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goCreate = () => {
    navigate('/corestone/webids/create');
  }

  const editFunction = (id) => {
    navigate('/corestone/webids/edit/'+id);
  }

  const removeFunction = (id) => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {

        fetch("http://localhost:8081/webids/" + id, {
            method: "DELETE",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(siteData),
            
        })
            .then(res => {
                alert('성공적으로 삭제되었습니다.')
                window.location.reload();
                // navigate('/corestone/webids')
            }).catch(err => {
                console.error(err.message);
            })
    }
}

  return (
    <div className="container h-full w-full bg-slate-300">
      <div className="text-center pt-16 ">
        <h2 className="text-2xl"> WEB ID관리</h2>
      </div>

      <div className=" w-full mt-8">
        <div className="w-5/6 mx-auto">
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-green-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-1"
            onClick={goCreate}
          >
            사이트 등록(+)
          </button>
        </div>
        <table className="w-5/6 mx-auto  bg-gray-300 border-2 border-black border-opacity-10 rounded-lg ">
          <thead>
            <tr className="h8 bg-blue-700 text-white rounded-lg text-sm h-10">
              <th className="w-1/12">ID</th>
              <th className="w-2/12">사이트명</th>
              <th className="w-2/12">URL</th>
              <th className="w-1/12">사용자ID</th>
              <th className="w-1/12">암호</th>
              <th className="w-3/12">설명</th>
              <th className="w-1/12"></th>

            </tr>
          </thead>
          <tbody>
            {siteData &&
              siteData.map((item) => (
                <tr key={item.id} className="text-center text-sm h-10">
                  <td className="w-1/12">{item.id}</td>
                  <td className="w-2/12 ">{item.sitename}</td>
                  {/* <td className="w-2/12 hover:cursor-pointer" onClick={openSite}>{item.siteurl}</td> */}
                  <td
                    className="w-2/12 hover:cursor-pointer text-blue-800 hover:bg-blue-500  hover:text-yellow-400 hover:rounded-xl"
                    onClick={() =>
                      window.open(
                        item.siteurl,
                        "width=800,height=600",
                        "_blank"
                      )
                    }
                  >
                    {" "}
                    {item.siteurl}{" "}
                  </td>
                  <td className="w-1/12">{item.userid}</td>
                  <td className="w-1/12">{item.password}</td>
                  <td className="w-4/12">{item.comment}</td>
                  <td className="w-1/12">
                    <button type="button" className="inline-flex items-center rounded border border-gray-300 bg-green-600 px-2.5 py-1.5 text-xs 
                            font-medium text-white shadow-sm hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=>editFunction(item.id)}
                     >E
                    </button>
                    <button type="button" className="inline-flex items-center rounded border border-gray-300 bg-red-600 px-2.5 py-1.5 text-xs 
                            font-medium text-white shadow-sm hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=>removeFunction(item.id)}
                     >D
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebIds;
