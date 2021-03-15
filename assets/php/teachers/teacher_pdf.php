<?php
session_start();
require_once '../functions/connect.php';
require_once '../functions/tcpdf/tcpdf.php';

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH,'teacher_absent_report' ,'Author Asmaa Dawoud');

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
$result=Run($_SESSION['query_teacher_report']);
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
<h3>جدول الغياب  :</h3>
<table>

  <thead>
      <tr>
      
      <td><strong>تاريخ الغياب </strong></td>
      <td><strong>العذر </strong></td>
      <td><strong>تأخير-غياب </strong></td>
      <td><strong> ملاحظات</strong></td>
      <td><strong> مقدار التاخير</strong></td>
      
      </tr>    
  </thead>
  <tbody>';
while($data =mysqli_fetch_array($result))
{$data["ex"]=$data["ex"]==1?'بعذر':'بدون عذر';
  $data["absent_obtion"]=$data["absent_obtion"]==1?'غياب':'تاخير';
 $html .= '
    <tr>  
      <td >'.$data["teacher_absent"].'</td>  
      <td >'.$data["ex"].'</td>  
      <td >'.$data["absent_obtion"].'</td>  
      <td >'.$data["notes"].'</td>  
      <td >'.$data["execusee"].'</td>  
    
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
$pdf->Output('teacher_absent_rebort.pdf', 'I');
