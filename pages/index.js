// import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import "./index.css";
import data from "../data/categories";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const CategoryLink = props => (
  <Link href={`/category/${convertToSlug(props.slug)}`}>
    <a className="category-link" />
  </Link>
);

export default function index() {
  return (
    <Layout>
      <h1 className="text-center py-3">Categories</h1>
      <div className="categories container">
        {data.map(item => (
          <div className="category" key={item.id}>
            <CategoryLink slug={item.category} />
            <p className="total-item-per-cat">{item.items.length}</p>
            <p className="category-name">{item.category}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
