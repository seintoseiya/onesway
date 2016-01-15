<?php
class CommentsController extends AppController {
	// public $scaffold;
	public $helpers = array('Html', 'Form');
	public $components = array('Flash');

	public function add(){
		if($this->request->is('post')){
			if($this->Comment->save($this->request->data)){
				$this->Flash->set('success!');
				$this->redirect(array('controller'=>'posts','action'=>'view',$this->data['Comment']['post_id']));
			}else{
				$this->Flash->set('failed!');
			}
		}
	}
}
