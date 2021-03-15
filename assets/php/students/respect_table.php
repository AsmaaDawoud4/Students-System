<?php

include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

     $id = $_GET['id'];

     $query = "SELECT rec_date,rec_total,rec_remain FROM receipt  WHERE id='$id' ORDER BY id  DESC";
     $data = GetDataall($query);
     $html='';
    
     foreach ($data as $value){
        $html.= '<tr>
                    <td>
                        <div class="input-group">
                            <div class="inputgroup-icon">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                            </div>
                            <input  type="text" data-toggle="datepicker"
                                placeholder="التاريخ" autocomplete="off" value='.$value[0].'  name="rec-date">
                        </div>
                    </td>
                    <td>
                        <select>
                            <option style="display: none;"> نوع القسط  </option>
                            <option>مصاريف </option>
                            <option>زي </option>
                            <option>كتب </option>
                            <option>مجموعات </option>
                            <option>باص </option>
                        </select>
                    </td>
                    <td>
                        <div class="input-group">
                            <input type="text" placeholder="المبلغ المدفوع" value='.$value[1].' name="rec-total" />
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <input type="text" placeholder="المتبقى"value='.$value[2].' name="rec-remain" />
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <textarea placeholder="ملاحظات"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="group-bnt  text-center">
                            <a href="#" class="btn btn-sm">طباعة </a>
                            
                            <a href="#" class="btn btn-sm edit_respect">تعديل </a>
                        </div>
                    </td>
                </tr>';
    }

     echo json_encode($html);
}
