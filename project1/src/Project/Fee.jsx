import React from "react";
import payonline from './payonline.png';
import Feereceipt from './Feereceipt.png';
import Otherfee from './Otherfee.webp';
//import feeStructureimg from './feeStructureimg.jpg';
//import feeReceiptimg from './feeReceiptimg.webp';
import { useNavigate } from 'react-router-dom';
const Fee = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <div className="h-[70px] w-full text-center text-[30px] font-bold bg-[rgb(171,215,242)] flex items-center justify-center">
        <h2>Fee</h2>
      </div>

      {/* Fee Structure */}
      <a  onClick={() => navigate('/fees')}>
        <div className="w-[70%] h-[100px] mx-auto mt-5 bg-[rgba(169,204,228,0.301)] text-[rgba(0,0,0,0.636)] rounded-[25px] text-[25px] flex items-center gap-6 px-8 transition-all duration-200 hover:scale-[1.02] hover:bg-[rgba(169,204,228,0.6)]">
          { <img
            src={Otherfee}
            alt="ICON"
            className="h-[80px] w-[70px] object-contain"
          /> }
          <h3>Fees Structure</h3>
        </div>
      </a>

      {/* Pay Online */}
      <a onClick={() => navigate('/feeson')}>
        <div className="w-[70%] h-[100px] mx-auto mt-5 bg-[rgba(169,204,228,0.301)] text-[rgba(0,0,0,0.636)] rounded-[25px] text-[25px] flex items-center gap-6 px-8 transition-all duration-200 hover:scale-[1.02] hover:bg-[rgba(169,204,228,0.6)]">
          { <img
            src={payonline}
            alt="ICON"
            className="h-[80px] w-[70px] object-contain"
          /> }
          <h3>Pay Online</h3>
        </div>
      </a>

      {/* Fee Receipt */}
      <a onClick={() => navigate('/feesonr')}>
        <div className="w-[70%] h-[100px] mx-auto mt-5 bg-[rgba(169,204,228,0.301)] text-[rgba(0,0,0,0.636)] rounded-[25px] text-[25px] flex items-center gap-6 px-8 transition-all duration-200 hover:scale-[1.02] hover:bg-[rgba(169,204,228,0.6)]">
          { <img
            src={Feereceipt}
            alt="ICON"
            className="h-[80px] w-[70px] object-contain"
          /> }
          <h3>Fee Receipt</h3>
        </div>
      </a>
    </>
  );
};

export default Fee;