(function () {
	function boostrap_grid_html() {
		s = '';
		s += '    <div class="page-container">                                                                             ';
		s += '        <div class="container">                                                                              ';
		s += '            <div class="row mt-5 mb-3 align-items-center">                                                   ';
		s += '                <div class="col-md-4">                                                                       ';
		s += '                歡迎多加利用搜尋功能,可用任一字眼快速查詢所有產品                                                        ';
		s += '                </div>                                                                                       ';
		s += '                <div class="col-md-4">                                                                       ';
		s += '                  <input type="text" class="form-control" placeholder="請在此輸入關鍵字..." id="ba_jinten_menu2_searchField"> ';
		s += '                </div>                                                                                       ';
		s += '                <div class="col-md-2 text-right">                                                            ';
		s += '                  <span class="pr-3">每頁顯示筆數:</span>                                                   ';
		s += '                </div>                                                                                       ';
		s += '                <div class="col-md-2">                                                                       ';
		s += '                    <div class="d-flex justify-content-end">                                                 ';
		s += '                        <select class="custom-select" name="rowsPerPage" id="changeRows">                    ';
		s += '                            <option value="1">1</option>                                                     ';
		s += '                            <option value="5">5</option>                                            ';
		s += '                            <option value="10" selected>10</option>                                                   ';
		s += '                            <option value="15">15</option>                                                   ';
		s += '                        </select>                                                                            ';
		s += '                    </div>                                                                                   ';
		s += '                </div>                                                                                       ';
		s += '            </div>                                                                                           ';
		s += '            <div id="ba_jinten_menu2"></div>                                                                            ';
		s += '        </div>                                                                                               ';
		s += '    </div>                                                                                                   ';
		s += '    <style>                                                                                                   ';
		s += '      #ba_jinten_menu2 .btn-primary { width:24px;height:24px } ';
		s += '      #ba_jinten_menu2 .btn-default  { width:24px;height:24px }';
		s += '      #ba_jinten_menu2 > div > table > tbody a {cursor:zoom-in}';
		s += '    </style>                                                   ';
		return s;
	}
	function initBaMenu() {
		$('#content > div > div.row').after(boostrap_grid_html());
		//console.log('initBaMenu 2');
		var baTable2 = $('#ba_jinten_menu2').tableSortable({
			data: ba_jinten_menu_items2,
			columns: ba_jinten_menu_columns2,
			nextText: ">",
			prevText: "<",
			searchField: '#ba_jinten_menu2_searchField',
			//responsive: {
			//    1100: {
			//        columns: {
			//            formCode: 'Form Code',
			//            formName: 'Form Name',
			//        },
			//    },
			//},
			rowsPerPage: 10,
			pagination: true,
			tableWillMount: function () {
				console.log('table will mount')
			},
			tableDidMount: function () {
				console.log('table did mount')
			},
			tableWillUpdate: function () { console.log('table will update') },
			tableDidUpdate: function () { console.log('table did update') },
			tableWillUnmount: function () { console.log('table will unmount') },
			tableDidUnmount: function () { console.log('table did unmount') },
			onPaginationChange: function (nextPage, setPage) {
				setPage(nextPage);
			},
			formatCell: function (row, key) {
				var doPdf2 = '<i class="fa fa-file-pdf-o" style="margin-right: 10px;color: #a91717;"></i>';
				if (key === '檢知管編號') {
					if (row["檢知管編號文件網址"] == "")
						return $('<span></span>').text(row[key]);
					else
						return $('<a href="' + row["檢知管編號文件網址"] + '">' +doPdf2+ row[key] + '</a>');
				}
				if (key === '檢知管類型') {
					if (row["檢知管類型文件網址"] == "")
						return $('<span></span>').text(row[key]);
					else
						return $('<a href="' + row["檢知管類型文件網址"] + '">' + doPdf2 + row[key] + '</a>');
				}
				if (key === '說明') {
					if (row["說明文件網址"] == "")
						return $('<span></span>').text(row[key]);
					else
						return $('<a href="' + row["說明文件網址"] + '">' + doPdf2 + row[key] + '</a>');
				}
				// Finally return cell for rest of columns;
				return row[key];
			},
		});

		$('#changeRows').on('change', function () {
			baTable2.updateRowsPerPage(parseInt($(this).val(), 10));
		})

	}
	debugger;
	initBaMenu();
})(window);
