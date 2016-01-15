<h2><?php echo h($post['Post']['title']); ?></h2>

<p><?php echo h($post['Post']['body']); ?></p>

<h2>Comments</h2>

<ul>
	<?php foreach ($post['Comment'] as $comment): ?>
	<li><?php echo h($comment['body']) ?> by <?php echo h($comment['commenter']); ?></li>
<?php endforeach; ?>
</ul>

<h2>Add Comment</h2>

<?php
echo $this->Form->create('Comment', array('action'=>'add'));
echo $this->Form->input('commenter');
echo $this->Form->input('body', array('row'=>3));
echo $this->Form->input('Comment.post_id', array('type'=>'hidden', 'value'=>$post['Post']['id']));
echo $this->Form->end('post comment');
?>