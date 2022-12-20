export const navItems = [
  {
    title: "WebApp",
    url: "/corestone/webapp",
  },
  {
    title: "아이디관리",
    url: "/corestone/webids",
  },
  {
    title: "문서함",
    url: "/services",
    submenu: [
      {
        title: "표준서식",
        url: "/web-design",
      },
      {
        title: "영업문서",
        url: "/web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "/frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "/node",
              },
              {
                title: "PHP",
                url: "/php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "/seo",
      },
    ],
  },

  {
    title: "영업관련",
    url: "/services",
    submenu: [
      {
        title: "web design",
        url: "/web-design",
      },
      {
        title: "web development",
        url: "/web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "/frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "/node",
              },
              {
                title: "PHP",
                url: "/php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "/seo",
      },
    ],
  },
  {
    title: "회의록작성",
    url: "/",
  },

];
