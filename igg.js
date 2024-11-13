     <script>
		h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");
function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
			var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
        alert(fpath+":0x"+vaddr.toString(16)+"-修改失败!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
	}
  function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
	}

// thêm <i></i> để nghiêng chữ
// chức năng ở đâu



function antenav1() {
              h5gg.clearResults();
              h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
              h5gg.editAll('4848124999925814228', 'I64');
              h5gg.clearResults();
              h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
              h5gg.editAll('4848124999925251973', 'I64');
              vant.Notify({
                type: 'success'
                , message: '✅'


function so03() { // xóa speed
    h5gg.editAll('4397530849764387586', 'I64');
    ({
        type: 'success',
        message: 'Đã Xóa'
    });

}

function so02() { // speed x8
    h5gg.editAll('4366458311853685297', 'I64');
    ({
        type: 'success',
        message: 'x8'
    });

}
	</script>