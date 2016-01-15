<?php
class Post extends AppModel{
	public $hasMany = 'Comment';

	public $validate = array(
		'title' => array(
			'rule' => 'notBlank',
			'message' => '空じゃダメ'
			),
		'body' => array(
			'rule' => 'notBlank'
			)
		);
}
