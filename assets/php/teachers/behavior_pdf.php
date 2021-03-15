<?php
session_start();
require_once '../functions/connect.php';
require_once '../functions/tcpdf/tcpdf.php';

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH,'teacher_behavior_report' ,'Author Asmaa Dawoud');

// set header and footer fonts
$pdf->setHeaderFont(array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

//set some language dependent data:
$lg = array();
$lg['a_meta_charset'] = 'UTF-8';
$lg['a_meta_dir'] = 'rtl';
$lg['a_meta_language'] = 'fa';
$lg['w_page'] = 'page';

// set some language-dependent strings (optional)
$pdf->setLanguageArray($lg);

// ---------------------------------------------------------

// set font
$pdf->SetFont('dejavusans', '', 12);

// add a page
$pdf->AddPage();
$html='';
$result=Run($_SESSION['query_behavior_report']);
// Arabic and English content
$html .= '
<style>
table {

  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 15px;
  
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

</head>
<body>
<h2>اسم المدرس    : '.$_POST['teacher_name'].'</h2>
<br>
<h3>جدول السلوك  :</h3>
<table>

  <thead>
      <tr>
      
      <td><strong>تاريخ السلوك </strong></td>
      <td><strong>نوع السلوك </strong></td>
      
      <td><strong> ملاحظات</strong></td>
     
      
      </tr>    
  </thead>
  <tbody>';
while($data =mysqli_fetch_array($result))
{
 $html .= '
    <tr>  
      <td >'.$data["teacher_behavior"].'</td>  
      <td >'.$data["behavior_type"].'</td>  
      <td >'.$data["notes"].'</td>  
     
    
    </tr>
 ';
}
$html .=
  '</tbody>

</table>';



$pdf->WriteHTML($html, true, 0, true, 0);

// set LTR direction for english translation
$pdf->setRTL(false);

// print newline
$pdf->Ln();

$pdf->SetFont('aealarabiya', '', 18);

// ---------------------------------------------------------
ob_end_clean();
//Close and output PDF document
$pdf->Output('teacher_behavior_rebort.pdf', 'I');
