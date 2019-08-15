import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/Layout";

export default function categoryItem() {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="text-center py-3">{router.query.slug}</h1>
      <div className="categories container">
        <div className="category item">
          <Link href="">
            <a className="btn btn-default minus">
              <img src="/static/img/minus.png" alt="MinusIcon" />
            </a>
          </Link>
          <Link href="">
            <a className="btn btn-default plus">
              <img src="/static/img/plus.png" alt="PlusIcon" />
            </a>
          </Link>
          <img src="/static/img/fruits.jpeg" alt="product image" />
        </div>
      </div>
    </Layout>
  );
}
