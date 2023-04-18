import React from "react";
import { Link } from "react-router-dom";
import Chart from "./../../components/Chart/Chart";
import { productsData } from "./../../datas";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublishIcon from "@mui/icons-material/Publish";
import "./Products.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title="Sale In This Month"
            data={productsData}
            dataKey="sales"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/person.png" className="productInfoImg" alt="" />
            <span className="productName">Dell Labtop</span>
          </div>

          <div className="productInfoButton">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">Dell Labtop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">90000$</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Store:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <lable>Product Name</lable>
            <input type="text" placeholder="Dell Labtop" />

            <lable>In Stoke</lable>
            <select id="inStoke">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <lable>Active</lable>
            <select id="inStoke">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpdater">
              <img
                src="/images/person.png"
                className="productUpdaterImg"
                alt="profiloPhoto"
              />
              <lable>
                <PublishIcon />
              </lable>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
