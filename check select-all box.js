<script>
    $(function () {
    //全选,设置checkbox name='all' tbody id=tb
      $("input[name=select_all]").click(function () {
          if (this.checked) {
              $("#tb :checkbox").prop("checked", true);
            } else {
              $("#tb :checkbox").prop("checked", false);
            }
          });
        });
        //单选 设置name=id
    function userCheck(ths) {
      if (ths.checked == false) {
        $("input[name=select_all]:checkbox").prop('checked', false);
        }
      else {
        var count = $("input[name='cbx']:checkbox:checked").length;
        if (count == $("input[name='cbx']:checkbox").length) {
            $("input[name=select_all]:checkbox").prop("checked", true);
            }
          }
        }
    </script>
