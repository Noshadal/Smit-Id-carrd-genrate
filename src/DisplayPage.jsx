function DisplayPage({ formData }) {
    const { NAME, fNAME, cnic, COURSE, id, img } = formData;
  
    return (
      <div className="flex flex-col lg:flex-row h-auto lg:h-[100vh] w-full justify-center items-center gap-10 lg:gap-20 p-4">
        {/* Left Section - User Card */}
        <div className=" border flex flex-col justify-center items-center md:h-[75vh] md:w-[65vw] min-h-[90vh] m-4 w-full lg:w-[27vw] p-4 bg-white rounded-lg shadow-md">
          <h1 className=" text-[32px] lg:text-[40px] font-bold font-sans m-4 text-blue-600">SMIT</h1>
          <h3 className=" bg-slate-100 text-center m-4 text-blue-600 p-2">
            SYLANI MASS IT <br /> TRAINING PROGRAM
          </h3>
          {img && (
            <img
              src={img}
              className=" h-[13vw] w-[13vw] object-cover m-4 border-green-700 border-4 "
              alt="User"
            />
          )}
          <h1 className="border-b-2  border-black w-64 text-center font-sans font-semibold text-[18px] lg:text-[20px]">{NAME}</h1>
          <h1 className="border-b-2  border-black w-64 text-center text-[18px] lg:text-[20px]">{COURSE}</h1>
          <h1 className="border-b-2  border-black w-64 text-center font-sans font-semibold text-[18px] lg:text-[20px]">{id}</h1>
        </div>
  
        {/* Right Section - Details */}
        <div className="h-auto min-h-[90vh] border-2 md:h-[75vh] md:w-[65vw] w-full lg:w-[28vw] flex flex-col justify-center px-6 lg:px-10 gap-4 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-[16px] lg:text-[18px] font-mono font-semibold border-b-2 rounded-lg pb-2">
            NAME: {NAME}
          </h1>
          <h1 className="text-[16px] lg:text-[18px] font-mono font-semibold border-b-2 rounded-lg pb-2">
            FATHER: {fNAME}
          </h1>
          <h1 className="text-[16px] lg:text-[18px] font-mono font-semibold border-b-2 rounded-lg pb-2">
            CNIC: {cnic}
          </h1>
          <h1 className="text-[16px] lg:text-[18px] font-mono font-semibold border-b-2 rounded-lg pb-2">
            COURSE: {COURSE}
          </h1>
          <p className="text-center font-semibold text-[14px] lg:text-[16px] mt-4">
            Note: This card is for SMIT's premises only. If found, please return to SMIT.
          </p>
          <p className="border-t-2 border-black text-center mt-6 lg:mt-10 pt-2">Issuing authority</p>
        </div>
      </div>
    );
  }
  
  export default DisplayPage;
  