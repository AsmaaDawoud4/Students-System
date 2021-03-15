<?php

session_start();

require_once '../functions/tcpdf/tcpdf.php';

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH,'New teachers' ,'Author Asmaa Dawoud');

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
// Arabic and English content
$html = '
<table cellpadding="5" cellspacing="5" border="0">
  <tr>
    <td><strong>اسم المدرس</strong></td>
    <td>'.$_SESSION['teacher_name'].'</td>
  </tr>
  
  <tr>
    <td><strong> تاريخ الميلاد</strong></td>
    <td>'.$_SESSION['teacher_DOB'].'</td>
   
  </tr> 
  <tr>
    <td><strong>الجنسية</strong></td>
    <td>'.$_SESSION['teacher_sexn'].'</td>
  </tr>
   <tr>
    <td><strong>صوره المدرس</strong></td>
    <td><img style="width: 50px;height: 50px;border-radius: 50%" src="../../imgs/'.$_SESSION['teacher_pic'].'" alt=""></td>
  </tr>
   <tr>
    <td><strong>الحالة الاجتماعية</strong></td>
    <td>'.$_SESSION['teacher_Social'].'</td>
  </tr>
  <tr>
    <td><strong>العنوان</strong></td>
    <td>'.$_SESSION['teacher_adress'].'</td>
  </tr>
  <tr>
    <td><strong> رقم الهاتف 1</strong></td>
    <td>'.$_SESSION['teacher_phone1'].'</td>
  </tr>
  <tr>
    <td><strong> رقم الهاتف 2</strong></td>
    <td>'.$_SESSION['teacher_phone2'].'</td>
  </tr>
  
  <tr>
    <td><strong>الوظيفة</strong></td>
    <td>'.$_SESSION['teacher_job'].'</td>
  </tr>
 
  <tr>
    <td><strong>الفصول</strong></td>
    <td>'.$_SESSION['teacher_classes'].'</td>
  </tr>
 <tr>
    <td><strong>تاريخ استلام العمل</strong></td>
    <td>'.$_SESSION['teacher_StartDate'].'</td>
  </tr>
  <tr>
    <td><strong> الخبرات السابقه</strong></td>
    <td>'.$_SESSION['teacher_Experince'].'</td>
  </tr>
 
</table>';
$pdf->WriteHTML($html, true, 0, true, 0);

// set LTR direction for english translation
$pdf->setRTL(false);

// print newline
$pdf->Ln();

$pdf->SetFont('aealarabiya', '', 18);

// ---------------------------------------------------------

//Close and output PDF document
$pdf->Output('New Teacher.pdf', 'I');
