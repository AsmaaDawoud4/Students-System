<input type="checkbox" name="type" value="1" />1
<input type="checkbox" name="type" value="2" />2
<input type="checkbox" name="type" value="3" />3
<input type="checkbox" name="type" value="4" />4
<input type="checkbox" name="type" value="5" />5

<br><br>
<button id="showResult">Show checked values</button>
<br><br>
<div id="result"></div>

<script src="">
    function getCheckedValues() {
  return Array.from(document.querySelectorAll('input[type="checkbox"]'))
  .filter((checkbox) => checkbox.checked)
  .Array.from(document.querySelectorAll("input[type=checkbox][name=type]:checked")).map(e => e.value);
}

const resultEl = document.getElementById('result');

document.getElementById('showResult').addEventListener('click', () => {
resultEl.innerHTML = getCheckedValues();
});
</script>