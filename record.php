<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <!-- Google font (cairo font) -->
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
        <!-- font-awesome v5 -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <!-- bootstrap v5 -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <!-- animate v3-->
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <!-- datepicker -->
        <link rel="stylesheet" href="assets/css/datepicker.css" />
        <!-- swiper slider -->
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <!-- dataTables -->
        <link rel="stylesheet" href="assets/css/jquery.dataTables.min.css" />
        <!-- custom style-->
        <link rel="stylesheet" href="assets/css/style.css" />
    </head>

    <body>
    <!--start main-header-->
    <header class="main-header">
        <div class="container d-flex">
            <ul class=" navbar-menu d-flex">
                <!--start toggle-menu (show in mobile)-->
                <a class="toggle-menu" href="#">
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
                <!--end toggle-menu (show in mobile)-->
                <!--mega-drop-down-->
                <li class="mega-drop-down"><a href="#"> شئون الطلبة <i class="fas fa-angle-down"></i></a>
                    <div class="animated mega-menu  fadeIn">
                        <ul class="d-flex row-cols-4">
                            <li><a href="add-student.html"><i class="fas fa-user-graduate"></i>  اضافه طالب </a></li>
                            <li><a href="student-record.html"><i class="far fa-sticky-note"></i> القيد اليومى للطلاب</a></li>
                            <li><a href="age-calculator.html"><i class="fas fa-calculator"></i> حاسبة عمر الطلاب</a></li>
                            <li><a href="student's-birthday.html"><i class="fas fa-birthday-cake"></i> عيد ميلاد الطالب اليوم</a></li>
                            <li><a href="editing-data.html"><i class="far fa-edit"></i> تعديل بيانات طالب</a></li>
                            <li><a href="#"><i class="fas fa-chalkboard-teacher"></i> الكنترول المدرسي</a></li>
                            <li><a href="student's-id.html"><i class="far fa-id-badge"></i> ID MANAGMENT</a></li>
                            <li><a href="class-data.html"><i class="fas fa-user-friends"></i> تسكين الفصول</a></li>
                            <li><a href="schedule.html"><i class="fas fa-clipboard-list"></i> الجداول الدراسية</a></li>
                            <li><a href="budget.html"><i class="fas fa-money-check-alt"></i> الميزانية </a></li>
                            <li><a href="therecord.html "><i class="fas fa-clipboard-list"></i> السجل</a></li>
                            <li><a href="print-certificates.html"><i class="fas fa-certificate"></i> طباعة الشهادات</a></li>
                        </ul>

                    </div>
                </li>
                <li class="mega-drop-down">
                    <a href="#"><i class="far fa-file-alt"></i> الاستقبال <i class="fas fa-angle-down"></i></a>
                    <div class="animated mega-menu  fadeIn">
                        <ul class="d-flex row-cols-4">
                            <li><a href="contact-daily.html"><i class="fas fa-user-graduate"></i> الاتصال بالغياب اليومي</a></li>
                            <li><a href="about-datastudent.html"><i class="fas fa-user-graduate"></i> استعلام عن بيانات طالب</a></li>
                            <li><a href="add-studenthold.html"><i class="far fa-pause-circle"></i> تسجيل طالب تحت الانتظار </a></li>
                        </ul>
                    </div>
                </li>
                <li  class="mega-drop-down">
                    <a href="#"><i class="far fa-file-alt"></i>الماليات <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="animated mega-menu  fadeIn">
                        <ul class="d-flex row-cols-4">
                            <li><a href="pay-fees.html"><i class="fas fa-money-check"></i> دفع مصروفات طالب</a></li>
                            <li><a href="print-payroll.html"><i class="fas fa-print"></i> طباعه كشف المرتبات</a></li>
                            <li><a href="#"> قريبا</a></li>
                        </ul>
                    </div>
                </li>
                <li  class="mega-drop-down">
                    <a href="#"><i class="far fa-file-alt"></i> شئون العامين <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="animated mega-menu  fadeIn">
                        <ul class="d-flex row-cols-4">
                            <li><a href="add-teacher.html"><i class="fas fa-chalkboard-teacher"></i> إضافة مدرس</a></li>
                            <li><a href="teacher-delays.html"><i class="fas fa-school"></i> التأخير والغياب والسلوك</a></li>
                            <li><a href="add-teacherhold.html"><i class="far fa-pause-circle"></i> تسجيل مدرس تحت الانتظار</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!--user-menu-drop-down-->
            <div class="user-menu-wrap">
                <a id="user-photo" href="#">
                    <img src="assets/imgs/admin.png" width="55" height="55" />
                </a>
                <div class="menu-container">
                    <ul class="user-menu">
                        <div class="profile-highlight">
                            <img src="assets/imgs/admin.png" alt="profile-img">
                            <div class="details">
                                <div id="profile-name">محمد منصور</div>
                                <div id="profile-footer">مدرس أول</div>
                            </div>
                        </div>
                        <li class="user-menu__item">
                            <a class="user-menu-link" href="#">
                                <i class="far fa-user-circle"></i>
                                <div>الملف الشخصى</div>
                            </a>
                        </li>
                        <li class="user-menu__item">
                            <a class="user-menu-link" href="#">
                                <i class="fas fa-users-cog"></i>
                                <div>الأعدادات</div>
                            </a>
                        </li>
                        <div class="footer">
                            <li class="user-menu__item"><a class="user-menu-link" href="#" style="color: #F44336;">تسجيل
                                    الخروج</a></li>
                            <li class="user-menu__item"><a class="user-menu-link" href="#">الأعدادات</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <!--end main-header-->

        <!--start content-->
        <section class="main-content pb-70">
            <div class="container">
                <div class="search-block">

                    <div class="input-group">
                        <input id="student_date" type="text" placeholder="أبحث عن ...">
    
                        <button class="btn inputgroup-icon search">
                            <i class="fas fa-search ok"></i> بحث
                        </button>
    
                    </div>
                    <div hidden style="margin-top:20px;margin-right: 40px;float:auto;" class="result"></div>
                </div>
    
    
                <div class="tab-section">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#main-data" role="tab">بيانات أساسية</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link table_absent_show" data-bs-toggle="tab" href="#behavioral-data" role="tab">بيانات سلوكية </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#medical-data" role="tab">بيانات طبية و صحية</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#studentGrades-data" role="tab">بيانات درجات الطالب</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link " data-bs-toggle="tab" href="#soon3" role="tab">جدول غياب الطالب</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <!------ بيانات اساسية (القيد اليومى )------->
                        <div class="tab-pane fade show active" id="main-data" role="tabpanel">
                        <?php 

//$id = $_GET['id'];
require_once 'assets/php/functions/connect.php';
require_once 'assets/php/students/search.php';
print_r(std_id);


?>
            <form class="addstudent-form" id="form" action="assets/php/students/edit2_student.php"method="POST"
            enctype="multipart/form-data">
            <div class="form-block">

                <div class="form-group"><input type="hidden" name="std_imge"></div>
                
                <!--block-title-->
                <div class="block-title d-flex">
                    <img class="icon-title" src="assets/imgs/graduated.png">
                </div>
                <div class="row ">
                    <!--inputs-group -->
                    <div class="inputs-group row-cols-3">
                        <span class="balloon-input">
                            <input class="balloon" id="id" type="hidden" maxlength="50" name="id" />
                            <input class="balloon" id="studentName" type="text" maxlength="50" name="std_name"
                                required />
                            <label for="studentName">أسم الطالب</label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon focuseoutt" id="studentId" type="text" maxlength="14" name="std_id"
                                required />
                            <label for="studentId">الرقم القومي </label>
                        </span>
                        <div class="studentdate"></div>
                        <span class="datepicker-group">
                            <div class="input-group">
                                <div class="inputgroup-icon">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </div>
                                <input id="studentdate" type="text" data-toggle="datepicker"
                                    placeholder="تاريخ الميلاد" autocomplete="off" name="std_DOB">
                            </div>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="studentNa" type="text" name="std_std_sexn" />
                            <label for="studentNa">الجنسية </label>
                        </span>
                        <!--radio-group-->
                        <span class="radio-group" id="std_sex">
                            <label for="male" class="btn-radio">
                                <input type="radio" id="male" name="std_sex" value="male">
                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                                    <path
                                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                        class="inner"></path>
                                    <path
                                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                        class="outer"></path>
                                </svg>
                                <span>ﺫﻛﺮ</span>
                            </label>

                            <label for="fmale" class="btn-radio ">
                                <input type="radio" id="fmale" name="std_sex" value="fmale">
                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                                    <path
                                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                        class="inner"></path>
                                    <path
                                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                        class="outer"></path>
                                </svg>
                                <span>اﻧﺜﻲ</span>
                            </label>
                        </span>
                        <span class="radio-group">

                            <label for="ﻣﺴﻠﻢ" class="btn-radio">
                                <input type="radio" id="ﻣﺴﻠﻢ" name="std_rlgn" value="مسلم">
                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                                    <path
                                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                        class="inner"></path>
                                    <path
                                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                        class="outer"></path>
                                </svg>
                                <span>ﻣﺴﻠﻢ</span>
                            </label>
                            <label for="ﻣﺴﻴﺤﻲ" class="btn-radio">
                                <input type="radio" id="ﻣﺴﻴﺤﻲ" name="std_rlgn" value="ﻣﺴﻴﺤﻲ">
                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                                    <path
                                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                        class="inner"></path>
                                    <path
                                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                        class="outer"></path>
                                </svg>
                                <span>ﻣﺴﻴﺤﻲ</span>
                            </label>
                        </span>

                        <span class="balloon-input studentAdres full-width">
                            <input class="balloon" id="studentAdress" type="text" maxlength="80"
                                name="std_Adress" />
                            <label for="studentAdress">اﻟﻌﻨﻮاﻥ ﺑﺎﻟﺘﻔﺼﻴﻞ </label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="studentCountybirth" type="text" name="std_Cbirth" />
                            <label for="studentCountybirth">محافظه الميلاد </label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="registrationNumber" type="text" name="reg_N" />
                            <label for="registrationNumber">رقم القيد </label>
                        </span>
                        <span>
                            <select name="std_lvl">
                                <option style="display: none;">اﻟﻤﺮﺣﻠﺔ</option>
                                <option id="kg" value="كى جى">
                                    كى جى</option>
                                <option id="eb" value="الابتدائيه">
                                    اﻻﺑﺘﺪاﺋﻲ</option>
                                <option id="p" value="الاعداديه">
                                    اﻻﻋﺪاﺩﻱ</option>
                            </select>
                        </span>
                        <span>
                            <select name="std_stge">
                                <option style=" display: none;">اﻟﺼﻒ</option>
                                <option class="kg" value="كى جى">
                                    كى جى</option>
                                <option class="eb1" value="الاول الابتدائى">
                                    الاول الابتدائى</option>
                                <option class="eb2" value="الثانى الابتدائى">
                                    الثانى الابتدائى</option>
                                <option class="eb3" value="الثالث الابتدائى">
                                    الثالث الابتددائى</option>
                                <option class="eb4" value="الرابع الابتدائى">
                                    الرابع الابتدائى</option>
                                <option class="eb5" value="الخامس الابتدائى">
                                    الخامس الابتدائى</option>
                                <option class="eb6" value="السادس الابتدائى">
                                    السادس الابتددائى</option>
                                <option class="p1" value="الاول الاعدادى">
                                    الاول الاعدادى</option>
                                <option class="p2" value="الثانى الاعدادى">
                                    الثانى الاعدادى</option>
                                <option class="p3" value="الثالث الاعدادى">
                                    الثالث الاعدادى</option>
                            </select>
                        </span>
                        <span>
                            <select name="std_class">
                                <option style=" display: none;">الفصل</option>
                                <option class="kg" value="كى جى">
                                    كى جى</option>
                                <option class="eb1" value="الاول الابتدائى">
                                    الاول الابتدائى</option>
                                <option class="eb2" value="الثانى الابتدائى">
                                    الثانى الابتدائى</option>
                                <option class="eb3" value="الثالث الابتدائى">
                                    الثالث الابتددائى</option>
                                <option class="eb4" value="الرابع الابتدائى">
                                    الرابع الابتدائى</option>
                                <option class="eb5" value="الخامس الابتدائى">
                                    الخامس الابتدائى</option>
                                <option class="eb6" value="السادس الابتدائى">
                                    السادس الابتددائى</option>
                                <option class="p1" value="الاول الاعدادى">
                                    الاول الاعدادى</option>
                                <option class="p2" value="الثانى الاعدادى">
                                    الثانى الاعدادى</option>
                                <option class="p3" value="الثالث الاعدادى">
                                    الثالث الاعدادى</option>

                            </select>
                        </span>
                        <span>
                            <select name="std_custody" id="std_custody">
                                <option style=" display: none;">الطالب برعاية</option>
                                <option id="fath" value="fath"> الأب </option>
                                <option id="moth" value="moth">الأم</option>
                                <option id="other" value="other">غير ذللك</option>
                            </select>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="RecommendedName" type="text" disabled name="R_Name" />
                            <label for="RecommendedName">اسم الموصى </label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="RecommendedN" type="text" disabled name="Relationship" />
                            <label for="RecommendedN">صفته ودرجة القرابة </label>
                        </span>
                    </div>
                    <!--upload-img-->
                    <div class="upload-img">
                        <div class="upload-content">
                            <div class="overlay d-flex">
                                <div class="group-bnt">
                                    <a href="#" class="btn addstudentpdf">طباعة تقرير pdf</a>
                                    <a href="#" class="btn">طباعة بيانات الطالب</a>
                                    <a href="#" class="btn">لاحقا</a>
                                </div>
                            </div>
                          
                            <canvas id="stdimg" >
                             </canvas>
                        </div>
                        <input type="file" name="std_imge" multiple id="finput" class="inputfile"
                            onchange="upload()"/>
                            
                        <label class="inputlabel" for="finput"> <i class="fas fa-upload"></i> رفع صورة
                            الطالب</label>
                    </div>

                </div>
            </div>
            <div class="form-block">
                <div class="block-title d-flex ">
                    <img class="icon-title" src="assets/imgs/family.png">
                </div>
                <div class="row">
                    <!--inputs-group -->
                    <div class="inputs-group row-cols-3">
                        <span class="balloon-input">
                            <input class="balloon" id="fatherName" type="text" maxlength="50" name="fath_name" />
                            <label for="fatherName">أسم الأب</label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="fatherId" type="text" maxlength="14" name="fath_id" />
                            <label for="fatherId">رقم بطاقة الاب </label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="fatherNo" type="text" maxlength="11" name="fath_tel" />
                            <label for="fatherNo">تليفون الاب</label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="fatherJob" type="text" maxlength="30" name="fath_job" />
                            <label for="fatherJob"> وظيفة الاب </label>
                        </span>

                    </div>

                    <hr>
                    <div class="inputs-group row-cols-3">
                        <span class="balloon-input">
                            <input class="balloon" id="motherName" type="text" maxlength="50" name="moth_name" />
                            <label for="motherName">أسم الأم</label>
                        </span>
                        <span class="balloon-input">
                            <input class="balloon" id="motherId" type="text" maxlength="14" name="moth_id" />
                            <label for="motherId">رقم بطاقة الام </label>
                        </span>

                        <span class="balloon-input">
                            <input class="balloon" id="motherNo" type="text" maxlength="11" name="moth_tel" />
                            <label for="motherNo">تليفون الام</label>
                        </span>

                        <span class="balloon-input">
                            <input class="balloon" id="motherJob" type="text" maxlength="30" name="moth_job" />
                            <label for="motherJob"> وظيفة الام</label>
                        </span>

                    </div>
                </div>
            </div>
            <!--save button-->
            <div class="text-center">
                <button class="btn save">حفظ البيانات</button>
            </div>

        </form>

                        </div>
                        <!------  بيانات سلوكية (القيد اليومى )------->
                        <div class="tab-pane fade" id="behavioral-data" role="tabpanel">
                            <div class="form-block">
                                <div class="table-responsive">
                                    <button id="addDay" class="btn btn-sm">اضافة يوم</button>
                                    <table id="table_absent"class=" display record-table cell-border row-border ">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h3>تاريخ الغياب</h3>
                                                </th>
                                                <th>
                                                    <h3>بعذر</h3>
                                                </th>
                                                <th>
                                                    <h3>ملاحظات</h3>
                                                </th>
                                                <th>&#160;</th>
                                            </tr>
                                        </thead>
                                         <tbody id="std_absent_tbody"></tbody>
                                    </table>

                                </div>
                                <div class="block-title d-flex mt-4 mb-4">
                                    <h3>سلوك الطالب</h3>
                                </div>
                                
                                <div class="table-responsive">
                                    <button id="addBehavior" class="btn btn-sm">اضافة سلوك</button>
                                    <table class=" display behavior-table cell-border row-border">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h3>تاريخ الاجراء</h3>
                                                </th>
                                                <th>
                                                    <h3>المخالفة</h3>
                                                </th>
                                                <th>
                                                    <h3>الاجراء</h3>
                                                </th>
                                                <th>
                                                    <h3>ملاحظات</h3>
                                                </th>
                                                <th>&#160;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="input-group">
                                                        <div class="inputgroup-icon">
                                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                                        </div>
                                                        <input type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <textarea placeholder="ملاحظات"></textarea>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <textarea placeholder="ملاحظات"></textarea>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <textarea placeholder="ملاحظات"></textarea>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button class="btn btn-sm remove">حذف</button>
                                                    <button class="btn btn-sm edit">تعديل</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            
                            </div>
                            <!--save button-->
                            <div class="text-center">
                                <button class="btn save">حفظ البيانات</button>
                            </div>
                        </div>
                        <!------  بيانات طبية و صحية (القيد اليومى )------->
                        <div class="tab-pane fade" id="medical-data" role="tabpanel">
                            <div class="form-block">
                                <div class="row">
                                    <!--inputs-group -->
                                    <div class="inputs-group row-cols-3">
                                        <span class="balloon-input">
                                            <input class="balloon" id="studentheight" type="text" maxlength="50" />
                                            <label for="studentheight">طول الطالب</label>
                                        </span>
                                        <span class="balloon-input">
                                            <input class="balloon" id="studentwhieght" type="text" maxlength="50" />
                                            <label for="studentwhieght">وزن الطالب</label>
                                        </span>
                                        <span class="balloon-input">
                                            <input class="balloon" id="soon" type="text" maxlength="50" />
                                            <label for="soon">قريبا</label>
                                        </span>
                                        <span class="balloon-input">
                                            <input class="balloon" id="soon2" type="text" maxlength="50" />
                                            <label for="soon2">قريبا</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!--save button-->
                            <div class="text-center">
                                <button class="btn save">حفظ البيانات</button>
                            </div>
                        </div>
                        <!------  بيانات الدرجة (القيد اليومى )------->
                        <div class="tab-pane fade" id="studentGrades-data" role="tabpanel">
                            <div class="form-block">
                                <div class="table-responsive">
                                <table class="table table-striped table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                            <td>
                                                <h6>الدرجة</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" placeholder="الدرجة" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="soon3" role="tabpanel">
                            <div class="form-block">
                                <div class="table-responsive">
                                    
                                    <table class=" display record-table_show cell-border row-border ">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h3>تاريخ الغياب</h3>
                                                </th>
                                                <th>
                                                    <h3>بعذر</h3>
                                                </th>
                                                <th>
                                                    <h3>ملاحظات</h3>
                                                </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody id="std_absent_tbody"></tbody>
                                    </table>

                                </div> 
                    </div>
                </div>
            </div>
        </section>
         <!--footer-->
    <footer class="footer ">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-5">
                    <div class="d-flex links">
                        <a href="#" class="me-2">الرئيسية</a>
                        <a href="#" class="me-2">عنا</a>
                        <a href="#" class="me-2">اتصل بنا</a>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="logo-footer">
                        <img src="assets/imgs/student-album1.jpg">
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="d-flex social-links justify-content-end">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="Copyright py-2">Copyright © 2021 All rights reserved.</div>
    </footer>
    <!--end content-->

        <!-- jquery v3 -->
        <script src="assets/js/jquery-3.5.1.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <!-- SimpleImage v3 -->
        <script src="assets/js/SimpleImage.js"></script>
        <!-- datepicker  -->
        <script src="assets/js/datepicker.js"></script>
        <!-- swiper slider  -->
        <script src="assets/js/swiper-bundle.min.js"></script>
        <!-- dataTables  -->
        <script src="assets/js/jquery.dataTables.min.js"></script>
        <!-- custom js (plugin) -->
        <script src="assets/js/plugin.js"></script>
        <script src="assets/php/students/js/record.js"></script>
    </body>
</html>


