import React from "react";
import { SlEnvolope,SlCalender,SlPhone } from 'react-icons/sl'


const people = [
    {
        name: 'CORESTONE',
        title: '회사 이메일 / 일정 / 주소록을 바로가기',
        role: '회사',
        email: 'mk@corestone.co.kr',
        telephone: '+82-10-2066-2242',
    },
    {
        name: 'GOOGLE',
        title: '개인 이메일 열기',
        role: '개인',
        email: 'mk@kangmin.kr',
        telephone: '+82-10-2066-2242',
    },
    {
        name: 'KAKAO',
        title: '카카오톡 열기',
        role: '카톡',
        email: 'utocan@gmail.com',
        telephone: '+82-10-2066-2242',
    },
]

const WebApp = () => {
    const openCoreMail = () => {
        window.open(
            "https://mail.office.hiworks.com/corestone.co.kr/mail/webmail/m_list/b0",
            "width=800,height=600",
            "_blank"
        );
    };
    const openCoreCal = () => {
        window.open(
            "https://calendar.office.hiworks.com/corestone.co.kr/schedule/schedulemain",
            "width=800,height=600",
            "_blank"
        );
    };
    const openCoreContact = () => {
        window.open(
            "https://contact.office.hiworks.com/private",
            "width=800,height=600",
            "_blank"
        );
    };

    return (
        <div className="h-full bg-lime-50">
            <div className="text-center py-8 rounded-lg  ">
                <h2 className="text-3xl mb-16 mt-16">자주 사용하는 APP  </h2>
                <div className="w-10/12 mx-auto">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {people.map((person) => (
                            <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow ">
                                {/* 카드타이틀 */}
                                <div className="flex w-full items-center justify-between space-x-6 p-6 bg-yellow-300">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center justify-center space-x-3">
                                            <h3 className="  truncate text-sm  font-medium text-gray-900">{person.name}</h3>
                                            <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                                {person.role}
                                            </span>
                                        </div>
                                        <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
                                    </div>
                                </div>
                                {/* 카드타이틀 끝 */}
                                {/* 카드본문*/}
                                <div>
                                    <div className="-mt-px flex divide-x divide-gray-200 ">
                                        <div className="flex w-0 flex-1">
                                            <div
                                                onClick={openCoreMail}
                                                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-300"
                                            >
                                                <SlEnvolope className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                                <span className="ml-3">Email</span>
                                            </div>
                                        </div>
                                        <div className="-ml-px flex w-0 flex-1">
                                            <div
                                                onClick={openCoreCal}
                                                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-300"
                                            >
                                                <SlCalender className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-3">일정</span>
                                            </div>
                                        </div>
                                        <div className="-ml-px flex w-0 flex-1">
                                            <div
                                                onClick={openCoreContact}
                                                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-300"
                                            >
                                                <SlPhone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-3">연락</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 카드 본문끝 */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WebApp;