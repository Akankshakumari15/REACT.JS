import React, { useState, useEffect } from "react";

const Products = () => {
  const [ApiData, SetApiData] = useState([]);
  const [OriginalData, SetOriginalData] = useState([]); // store all products
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        SetApiData(data.products);
        SetOriginalData(data.products);
      });
  }, []);

  // 🔍 Search
  function handleSearch() {
    if (!query.trim()) {
      alert("Please enter something to search!");
      return;
    }

    const filtered = OriginalData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    SetApiData(filtered);
    setCurrentPage(1);
  }

  // Reset when search cleared
  function handleChange(e) {
    let value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      SetApiData(OriginalData);
      setCurrentPage(1);
    }
  }

  // ⬆️ Sort Ascending
  function fun1() {
    let Data1 = [...ApiData].sort((a, b) => a.price - b.price);
    SetApiData(Data1);
  }

  // ⬇️ Sort Descending
  function fun2() {
    let Data1 = [...ApiData].sort((a, b) => b.price - a.price);
    SetApiData(Data1);
  }

  // 💰 Filter by price
  const handleFilter = (min, max) => {
    setPriceRange([min, max]);
    const filtered = OriginalData.filter(
      (item) => item.price >= min && item.price <= max
    );
    SetApiData(filtered);
    setCurrentPage(1);
  };

  // // 🧮 Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ApiData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(ApiData.length / itemsPerPage))
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div
      id="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {/* --- Search + Sort Controls --- */}
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search product..."
          style={{
            padding: "5px",
            border: "2px solid black",
            marginRight: "10px",
            height: "25px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginRight: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
          }}
        >
          SEARCH
        </button>

        <button
          onClick={fun1}
          style={{
            marginRight: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
          }}
        >
          Ascending
        </button>
        <button
          onClick={fun2}
          style={{
            marginRight: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
          }}
        >
          Descending
        </button>
      </div>

      {/* --- Filter Buttons --- */}
      <div style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
        <h3>Filter by Price</h3>
        <button style={{
          marginRight: "10px",
          border: "3px solid black",
          color: "black",
          backgroundColor: "gold",
          cursor: "pointer",
          height: "30px"
        }} onClick={() => handleFilter(0, 100)}>₹0–₹100</button>
        <button style={{
          marginRight: "10px",
          border: "3px solid black",
          color: "black",
          backgroundColor: "gold",
          cursor: "pointer",
          height: "30px",
        }} onClick={() => handleFilter(100, 500)}>₹100–₹500</button>
        <button style={{
          marginRight: "10px",
          border: "3px solid black",
          color: "black",
          backgroundColor: "gold",
          cursor: "pointer",
          height: "30px",
        }} onClick={() => handleFilter(500, 1000)}>₹500–₹1000</button>
        <button style={{
          marginRight: "10px",
          border: "3px solid black",
          color: "black",
          backgroundColor: "gold",
          cursor: "pointer",
          height: "30px",
        }} onClick={() => handleFilter(0, Infinity)}>All</button>
      </div>

      {/* --- Product Cards --- */}
      {currentItems.map((a) => (
        <div
          key={a.id}
          id="card"
          style={{
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={a.images[0]}
            alt={a.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h4>{a.title}</h4>
          <p>
            <b>Brand:</b> {a.brand}
          </p>
          <p>
            <b>Price:</b> ${a.price}
          </p>
        </div>
      ))}

      {/* --- Pagination Buttons --- */}
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            marginRight: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
          }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(ApiData.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(ApiData.length / itemsPerPage)}
          style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;

