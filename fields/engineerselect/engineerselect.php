<?php
class EngineerselectField extends SelectField {
	public function __construct() {
		parent::__construct();
		$this->page = page(kirby()->get('option', 'engineer.page.id'));
	}
}