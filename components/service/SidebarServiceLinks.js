import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData } from "../shared/Api";
import Link from "next/link";

const SidebarServiceLinks = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  const [services, setservices] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`services`);
      setservices(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);
  return (
    <div className="sidebar-widget">
      <ul className="service-list">
        <li>
          <a href="/services">
            <span className="color-layer" />
            All Services
          </a>
        </li>

        {services?.map((s) => {
          return (
            <li key={s?._id}
            className={(slug===s._id) ? "current":""}
            >
              <Link href={`/services/${s?._id}`}>
                <span className="color-layer" />
                {s?.name}
              </Link>
            </li>
          );
        })}
       

      </ul>
    </div>
  );
};

export default SidebarServiceLinks;
