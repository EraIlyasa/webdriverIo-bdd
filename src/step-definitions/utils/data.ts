class Data {
	public _page!: string;
	public _name!: string;
	public _orderId!: string;
	public _productId!: string;
	public _atributeId!: string;
	public _price!: string;
	public _transactionId!: string;
	public _nameVoucher!: string;
	public _idVoucher!: string;
	public _nominalCoin!: string;
	public _productPrice!: string;
	public _listId!: string;
	public _cashbackJawara!: string;
	public _nominalPoint!: string;
	public _subTotal!: string;
	public _cashbackVA!: string;
	public _nameNotif!: string;
	public _subTotalCheckout!: string;
	public _indexRow!: string;
	public _countProduct!: string;
	public _grandTotalDetail!: string;
	public _cashbackJawaraDetail!: string;
	public _countNotifTrx!: number;
	public _discountCoin!: number;
	public _idFlashsale!: string;
	public _voucherName!: string;
	public _globalInvoice!: string;
	public _returCode!: string;
	public _accessToken!: string;

	public set accessToken(tokenAccess: string) {
		this._accessToken = tokenAccess;
	}
	public get accessToken() {
        return this._accessToken;
    }

	public set codeRetur(returCode: string) {
		this._returCode = returCode;
	}
	public get codeRetur() {
		return this._returCode;
	}

	public set coinDiscount(discountCoin: number) {
		this._discountCoin = discountCoin;
	}
	public get coinDiscount() {
		return this._discountCoin;
	}

	public set notifCountTrx(countNotifTrx: number) {
		this._countNotifTrx = countNotifTrx;
	}
	public get notifCountTrx() {
		return this._countNotifTrx;
	}

	public set jawaraCashbackDetail(cashbackJawaraDetail: string) {
		this._cashbackJawaraDetail = cashbackJawaraDetail;
	}
	public get jawaraCashbackDetail() {
		return this._cashbackJawaraDetail;
	}

	public get detailGrandTotal(): string {
		return this._grandTotalDetail;
	}

	public set detailGrandTotal(grandTotalDetail: string) {
		this._grandTotalDetail = grandTotalDetail;
	}

	public get productCount(): string {
		return this._countProduct;
	}

	public set productCount(countProduct: string) {
		this._countProduct = countProduct;
	}

	public set rowIndex(indexRow: string) {
		this._indexRow = indexRow;
	}
	public get rowIndex() {
		return this._indexRow;
	}

	public set nameMission(name: string) {
		this._name = name;
	}
	public get nameMission() {
		return this._name;
	}

	public set notifName(nameNotif: string) {
		this._nameNotif = nameNotif;
	}
	public get notifName() {
		return this._nameNotif;
	}

	public set totalSub(subTotal: string) {
		this._subTotal = subTotal;
	}
	public get totalSub() {
		return this._subTotal;
	}

	public set checkoutTotal(subTotalCheckout: string) {
		this._subTotalCheckout = subTotalCheckout;
	}
	public get checkoutTotal() {
		return this._subTotalCheckout;
	}

	public set vaCashback(cashbackVA: string) {
		this._cashbackVA = cashbackVA;
	}
	public get vaCashback() {
		return this._cashbackVA;
	}

	public set jawaraCashback(cashbackJawara: string) {
		this._cashbackJawara = cashbackJawara;
	}
	public get jawaraCashback() {
		return this._cashbackJawara;
	}

	public set idList(listId: string) {
		this._listId = listId;
	}
	public get idList() {
		return this._listId;
	}

	public get pointNominal() {
		return this._nominalPoint;
	}

	public set pointNominal(nominalPoint: string) {
		this._nominalPoint = nominalPoint;
	}

	public get coinNominal() {
		return this._nominalCoin;
	}

	public set coinNominal(nominalCoin: string) {
		this._nominalCoin = nominalCoin;
	}

	public set priceProduct(productPrice: string) {
		this._productPrice = productPrice;
	}
	public get priceProduct() {
		return this._productPrice;
	}

	public set voucherId(idVoucher: string) {
		this._idVoucher = idVoucher;
	}
	public get voucherId() {
		return this._idVoucher;
	}

	public set voucherName(nameVoucher: string) {
		this._nameVoucher = nameVoucher;
	}
	public get voucherName() {
		return this._nameVoucher;
	}

	public get idOrder() {
		return this._orderId;
	}
	public set idOrder(orderId: string) {
		this._orderId = orderId;
	}

	public set idProduct(productId: string) {
		this._productId = productId;
	}

	public get idProduct() {
		return this._productId;
	}
	public set idAtribute(atributeId: string) {
		this._atributeId = atributeId;
	}

	public get idAtribute() {
		return this._atributeId;
	}
	public set totalPrice(price: string) {
		this._price = price;
	}

	public get totalPrice() {
		return this._price;
	}

	public set currentPage(page: string) {
		this._page = page;
	}

	public get currentPage() {
		return this._page;
	}

	public set idTransaction(transactionId: string) {
		this._transactionId = transactionId;
	}
	public get idTransaction() {
		return this._transactionId;
	}

	// public set idFlashsale(flashsaleId: string) {
	// 	this._idFlashsale = flashsaleId;
	// }
	// public get idFlashsale() {
	// 	return this._idFlashsale;
	// }

	public set flashsaleId(idFlashsale: string) {
		this._idFlashsale = idFlashsale;
	}
	public get flashsaleId() {
		return this._idFlashsale;
	}

	public set nameVoucher(voucherName: string) {
		this._voucherName = voucherName;
	}
	public get nameVoucher() {
		return this._voucherName;
	}

	public set invoiceGlobal(globalInvoice: string) {
		this._globalInvoice = globalInvoice;
	}
	public get invoiceGlobal() {
		return this._globalInvoice;
	}

	public clearData() {
		this._page = '';
	}
}

export default new Data();
