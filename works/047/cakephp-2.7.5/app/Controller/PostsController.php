<?php
class PostsController extends AppController {
	// public $scaffold;
	public $helpers = array('Html', 'Form');
	public $components = array('Flash');

	public function index(){
		// $params = array(
		// 	'order' => 'modified desc',
		// 	'limit' => 2
		// 	);
		$this->set('posts', $this->Post->find('all'));
		$this->set('title_for_layout', '記事一覧');
	}

	public function view($id = null){
		$this->Post->id = $id;
		$this->set('post', $this->Post->read());
	}

	public function add(){
		if($this->request->is('post')){
			if($this->Post->save($this->request->data)){
				$this->Flash->set('success!');
				$this->redirect(array('action'=>'index'));
			}else{
				$this->Flash->set('failed!');
			}
		}
	}

	public function edit($id = null){
		$this->Post->id = $id;
		if ($this->request->is('get')){
			$this->request->data = $this->Post->read();
		}else{
			if($this->Post->save($this->request->data)){
				$this->Flash->set('success!');
				$this->redirect(array('action'=>'index'));
			}else{
				$this->Flash->set('failed!');
			}
		}
	}

	public function delete($id){
		if($this->request->is('get')){
			throw new MethodNotAllowedException();
		}
		if ($this->request->is('ajax')) {
			if ($this->Post->delete($id)) {
				$this->autoRender = false;
				$this->autoLayout = false;
				$response = array('id' => $id);
				$this->header('Content-Type: application/json');
				echo json_encode($response);
				exit();
			}
		}
		$this->redirect(array('action'=>'index'));
	}
}
