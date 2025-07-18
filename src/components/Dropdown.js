
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const toolsData = [
  {
    category: "More",
    items: [
      {
        name: "Compress PDF",
        icon: "/images/Compress.svg",
        customIcon: "compress",
        path: "/compress-pdf",
      },
      {
        name: "PDF Converter",
        icon: "/images/PDF Convert.svg",
        customIcon: "convert",
        path: "/convert-pdf",
      },
      {
        name: "Unlock PDF",
        icon: "/images/Unlock PDF.svg",
        customIcon: "unlock",
        path: "/unlock-pdf",
      },
      {
        name: "Protect PDF",
        icon: "/images/Protect PDF.svg",
        customIcon: "protect",
        path: "/protect-pdf",
      },
    ],
  },
  {
    category: "Organize",
    items: [
      {
        name: "Merge PDF",
        icon: "/images/Merge-PDF.svg",
        customIcon: "merge",
        path: "/merge-pdf",
      },
      {
        name: "Split PDF",
        icon: "/images/Split-PDF.svg",
        customIcon: "split",
        path: "/split-pdf",
      },
      {
        name: "Rotate PDF",
        icon: "/images/Rotate-PDF.svg",
        customIcon: "Rotate",
        path: "/rotate-pdf",
      },
      {
        name: "Delete PDF Pages",
        icon: "/images/Delete-PDF-Pages.svg",
        customIcon: "DeletePdf",
        path: "/delete-pages-from-pdf",
      },
    ],
  },
  {
    category: "Convert from PDF",
    items: [
      {
        name: "PDF to Word",
        icon: "/images/Pdf-Word.svg",
        customIcon: "PdfToWord",
        path: "/pdf-to-word",
      },
      {
        name: "PDF to Excel",
        icon: "/images/Pdf-Excel.svg",
        customIcon: "PdfToExcel",
        path: "/pdf-to-excel",
      },
      {
        name: "PDF to PPT",
        icon: "/images/pdf-PPT.svg",
        customIcon: "PdfToPPT",
        path: "/pdf-to-ppt",
      },
      {
        name: "PDF to JPG",
        icon: "/images/pdf-Jpg.svg",
        customIcon: "PdfToJPG",
        path: "/pdf-to-jpg",
      },
    ],
  },
  {
    category: "Convert to PDF",
    items: [
      {
        name: "Word to PDF",
        icon: "/images/Pdf-Word.svg",
        customIcon: "WordToPdf",
        path: "/word-to-pdf",
      },
      {
        name: "Excel to PDF",
        icon: "/images/Pdf-Excel.svg",
        customIcon: "ExcelToPdf",
        path: "/excel-to-pdf",
      },
      {
        name: "PPT to PDF",
        icon: "/images/pdf-PPT.svg",
        customIcon: "PPTToPdf",
        path: "/ppt-to-pdf",
      },
      {
        name: "JPG to PDF",
        icon: "/images/pdf-Jpg.svg",
        customIcon: "JPGToPdf",
        path: "/jpg-to-pdf",
      },
    ],
  },
];

const Dropdown = () => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    if (path) navigate(path);
  };


  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "1000px",
        backgroundColor: "white",
        boxShadow: 5,
        border: '3px solid #8A2BE2',
        py: 4,
        zIndex: 1000,
        textAlign: "left",
        borderRadius: 2,
      }}
    >
      <Box sx={{ maxWidth: "900px", mx: "auto", px: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          {toolsData.map((section) => (
            <Grid
              item
              key={section.category}
              xs={12}
              sm={6}
              md={3}
              lg={3}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: "15px",
                  color: "#666",
                  textTransform: "uppercase",
                  pb: 0.5,
                }}
              >
                {section.category}
              </Typography>

              {section.items.map((item) => (
                <Box
                  key={item.name}
                  onClick={() => handleItemClick(item.path)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 1.5,
                    py: 0.8,
                    px: 1,
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor:
                        item.name === "PDF to Word" ||
                        item.name === "Word to PDF"
                          ? "#42A5F5"
                          : item.name === "PDF to Excel" ||
                            item.name === "Excel to PDF"
                          ? "#00C853"
                          : item.name === "PDF to PPT" ||
                            item.name === "PPT to PDF"
                          ? "#FF8200"
                          : item.name === "PDF to JPG" ||
                            item.name === "JPG to PDF"
                          ? "#FFB800"
                          : section.category === "Organize"
                          ? "#7B5FFF"
                          : "#EF3B3B",
                      "& .icon-box": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiTypography-root": {
                        color: "white",
                      },
                      "& .icon-emoji": {
                        filter: "invert(100%)",
                      },
                      "& img": {
                        filter: "invert(100%)",
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                      transition: "background-color 0.2s",
                    }}
                  >
                    {item.icon?.endsWith(".svg") ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        style={{
                          width: 25,
                          height: 25,
                          objectFit: "contain",
                          filter: "none",
                        }}
                      />
                    ) : (
                      <span
                        className="icon-emoji"
                        style={{ fontSize: "24px", lineHeight: 1 }}
                      >
                        {item.icon}
                      </span>
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#444",
                      display: "flex",
                      alignItems: "center",
                      height: 35,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dropdown;
