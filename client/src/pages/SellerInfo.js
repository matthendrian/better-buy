//This creates a page for the seller to track their data. 

//Must Auto-increment when a sale is processed. 
import React from "react";




const SellerInfo = () => {
  return (
    <div>
      <Jumbotron>
        <h1>My Sales!</h1>
      </Jumbotron>

      <div class="transactions">
      <table>
        <thead>
          <th>Transaction</th>
          <th>Amount</th>
        </thead>
        <tbody id="tbody">
    
        </tbody>
      </table>
    </div>
    
    <canvas id="myChart"></canvas>
    <script src="index.js"></script>
  </div>
  );
};

export default SellerInfo;