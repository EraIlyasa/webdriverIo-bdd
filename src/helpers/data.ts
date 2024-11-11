class data {
    public _page!: string;


    public set currentPage(page: string) {
		this._page = page;
	}
    public get currentPage() {
		return this._page;
	}
    public clearData() {
		this._page = '';
	}
}
export default new data();