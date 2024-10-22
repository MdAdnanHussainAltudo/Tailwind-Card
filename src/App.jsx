import "./App.css";
import Row from "./components/Row/Row";

let dataArr = [
  {
    title: "Frontend Technologies",
    elements: [
      {
        title: "Languages",
        elements: [
          {
            name: "HTML",
            description: "The standard markup language for creating web pages.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
            shadowClr: "html",
          },
          {
            name: "CSS",
            description:
              "A style sheet language used for describing the presentation of a document written in HTML.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            shadowClr: "css",
          },
          {
            name: "JavaScript",
            description:
              "The core programming language for adding interactivity and dynamic behavior to web pages.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            shadowClr: "javascript",
          },
          {
            name: "TypeScript",
            description:
              "A typed superset of JavaScript that adds static types, making code more predictable and easier to debug.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/768px-Typescript.svg.png",
            shadowClr: "typescript",
          },
        ],
      },
      {
        title: "Frameworks",
        elements: [
          {
            name: "Bootstrap",
            description:
              "A popular CSS framework for developing responsive and mobile-first websites.",
            image:
              "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
            shadowClr: "bootstrap",
          },
          {
            name: "Tailwind CSS",
            description:
              "A utility-first CSS framework for creating custom designs.",
            image:
              "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
            shadowClr: "tailwindcss",
          },
          {
            name: "React",
            description: "A JavaScript library for building user interfaces.",
            image: "https://www.fullstackpython.com/img/logos/react.png",
            shadowClr: "react",
          },
          {
            name: "Next.js",
            description:
              "A React framework that enables functionality such as server-side rendering and generating static websites.",
            image:
              "https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress",
            shadowClr: "nextjs",
          },
        ],
      },
    ],
  },
  {
    title: "Backend Technologies",
    elements: [
      {
        title: "Languages",
        elements: [
          {
            name: "Node.js",
            description:
              "JavaScript runtime built on Chrome's V8 JavaScript engine, allowing server-side JavaScript execution.",
            image:
              "https://www.curotec.com/wp-content/uploads/2023/09/curotec-nodejs.png",
            shadowClr: "nodejs",
          },
          {
            name: "Java",
            description:
              "A widely-used programming language designed to have as few implementation dependencies as possible.",
            image:
              "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            shadowClr: "java",
          },
          {
            name: "Python",
            description:
              "A high-level programming language known for its readability and versatility, often used in web development.",
            image:
              "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
            shadowClr: "python",
          },
        ],
      },
      {
        title: "Frameworks",
        elements: [
          {
            name: "Express.js",
            description:
              "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            image:
              "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
            shadowClr: "expressjs",
          },
          {
            name: "Django",
            description:
              "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
            image: "https://www.fullstackpython.com/img/logos/django.png",
            shadowClr: "django",
          },
          {
            name: "Spring Boot",
            description:
              "A framework for building Java-based applications with minimal configuration.",
            image:
              "https://cdn.hashnode.com/res/hashnode/image/upload/v1636832404785/mTXlsmro-.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            shadowClr: "springboot",
          },
          {
            name: "Laravel",
            description:
              "A PHP framework for web artisans, providing an elegant syntax and powerful features.",
            image: "https://laravel.com/img/logotype.min.svg",
            shadowClr: "laravel",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="bg-slate-800 text-white py-8">
      <div id="app" className="container mx-auto p-4">
        <div className="">
          <div className="w-fit">
            <h1
              className="text-4xl font-bold px-2 md:px-4 lg:px-8"
              style={{ fontVariant: "small-caps" }}
            >
              Web Development Technologies
            </h1>
            <hr className="mt-2 mb-16 border-white mx-2 md:mx-4 lg:mx-8" />
          </div>
        </div>
        {dataArr.map((data, index) => (
          <div key={index}>
            <h2 className="text-3xl font-semibold px-2 md:px-4 lg:px-8">
              {data.title}
            </h2>
            <hr className="mt-2 mb-8 border-slate-500 mx-2 md:mx-4 lg:mx-8" />
            <Row elements={data.elements} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
