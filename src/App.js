import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp"; // Fixed the import
import "@fontsource/poppins"; // Default weight 400
import Compress from "./pages/Compress";
import Convert from "./pages/Convert";
import Protect from "./pages/ProtectPDF";
import Unlock from "./pages/UnlockPDF";
import Edit from "./pages/Edit";
import Merge from "./pages/Merge";
import Split from "./pages/Split";
import Rotate from "./pages/Rotate";
import DeletePdf from "./pages/DeletePdf";
import PdfToWord from "./pages/PdfToWord";
import PdfToExcel from "./pages/PdfToExcel";
import PdfToPPT from "./pages/PdfToPPT";
import PdfToJPG from "./pages/PdfToJPG";
import WordToPDF from "./pages/WordToPDF";
import ExcelToPDF from "./pages/ExcelToPDF";
import PPTToPDF from "./pages/PPTToPdf";
import JPGToPDF from "./pages/JPGToPDF";
import AllPdfTools from "./pages/AllPdfTools";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/compress-pdf" element={<Compress />} />
        <Route path="/convert-pdf" element={<Convert />} />
        <Route path="/unlock-pdf" element={<Unlock />} />
        <Route path="/protect-pdf" element={<Protect />} />
        <Route path="/edit-pdf" element={<Edit />} />
        <Route path="/merge-pdf" element={<Merge />} />
        <Route path="/split-pdf" element={<Split />} />
        <Route path="/rotate-pdf" element={<Rotate />} />
        <Route path="/delete-pages-from-pdf" element={<DeletePdf />} />
        <Route path="/pdf-to-word" element={<PdfToWord />} />
        <Route path="/pdf-to-excel" element={<PdfToExcel />} />
        <Route path="/pdf-to-ppt" element={<PdfToPPT />} />
        <Route path="/pdf-to-jpg" element={<PdfToJPG />} />
        <Route path="/word-to-pdf" element={<WordToPDF />} />
        <Route path="/excel-to-pdf" element={<ExcelToPDF />} />
        <Route path="/ppt-to-pdf" element={<PPTToPDF />} />
        <Route path="/jpg-to-pdf" element={<JPGToPDF />} />
        <Route path="/all-pdf-tools" element={<AllPdfTools />} />
      </Routes>
    </Router>
  );
};

export default App;
