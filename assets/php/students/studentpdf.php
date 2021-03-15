<?php

session_start();

require_once '../functions/tcpdf/tcpdf.php';

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH,'New Students' ,'Author Asmaa Dawoud');

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
    <td><strong>اسم الطالب</strong></td>
    <td>'.$_SESSION['std_name'].'</td>
  </tr>
  <tr>
    <td><strong>الرقم القومى للطالب</strong></td>
    <td>'.$_SESSION['std_id'].'</td>
  </tr> 
  <tr>
    <td><strong> تاريخ الميلاد</strong></td>
    <td>'.$_SESSION['std_DOB'].'</td>
   
  </tr> 
  <tr>
    <td><strong>الجنسية</strong></td>
    <td>'.$_SESSION['std_std_sexn'].'</td>
  </tr>
   <tr>
    <td><strong>النوع</strong></td>
    <td>'.$_SESSION['std_sex'].'</td>
  </tr>
   <tr>
    <td><strong>الديانة</strong></td>
    <td>'.$_SESSION['std_rlgn'].'</td>
  </tr>
  <tr>
    <td><strong>العنوان</strong></td>
    <td>'.$_SESSION['std_Adress'].'</td>
  </tr>
  <tr>
    <td><strong>محافظه الميلاد</strong></td>
    <td>'.$_SESSION['std_Cbirth'].'</td>
  </tr>
  <tr>
    <td><strong>رقم القيد</strong></td>
    <td>'.$_SESSION['reg_N'].'</td>
  </tr>
  <tr>
    <td><strong>المرحلة</strong></td>
    <td>'.$_SESSION['std_lvl'].'</td>
  </tr>
  <tr>
    <td><strong>الصف</strong></td>
    <td>'.$_SESSION['std_class'].'</td>
  </tr>
  <tr>
    <td><strong>الفصل</strong></td>
    <td>'.$_SESSION['std_stge'].'</td>
  </tr>

  <tr>
    <td><strong> الطالب برعاية</strong></td>
    <td>'.$_SESSION['std_custody'].'</td>
  </tr>
  <tr>
    <td><strong>   اسم الموصى</strong></td>
    <td>'.$_SESSION['R_Name'].'</td>
  </tr>
  <tr>
    <td><strong>صفته ودرجه القرابة</strong></td>
    <td>'.$_SESSION['Relationship'].'</td>
  </tr>
  <tr>
    <td><strong> أسم الأب</strong></td>
    <td>'.$_SESSION['fath_name'].'</td>
  </tr>
  <tr>
    <td><strong>رقم بطاقة الأب</strong></td>
    <td>'.$_SESSION['fath_id'].'</td>
  </tr>
  <tr>
    <td><strong>تليفون الأب</strong></td>
    <td>'.$_SESSION['fath_tel'].'</td>
  </tr>
  <tr>
    <td><strong>وظيفة الأب</strong></td>
    <td>'.$_SESSION['fath_job'].'</td>
  </tr>
  <tr>
    <td><strong> أسم الأم</strong></td>
    <td>'.$_SESSION['moth_name'].'</td>
  </tr>
  <tr>
    <td><strong>رقم بطاقة الأم</strong></td>
    <td>'.$_SESSION['moth_id'].'</td>
  </tr>
  <tr>
    <td><strong>تليفون الأم</strong></td>
    <td>'.$_SESSION['moth_tel'].'</td>
  </tr>
  <tr>
    <td><strong>وظيفة الأم</strong></td>
    <td>'.$_SESSION['moth_job'].'</td>
  </tr>
 <tr>
    <td><strong> صوره الطالب</strong></td>
    <td><img style="width: 50px;height: 50px;border-radius: 50%" src="../../imgs/'.$_SESSION['std_imge'].'" alt=""></td>
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
$pdf->Output('New Student.pdf', 'I');
