<h2>記事一覧</h2>

<ul>
	<?php foreach ($posts as $post) : ?>
	<li id="post_<?php echo h($post['Post']['id']); ?>">
		<?php
		// debug($post);
		// echo h($post['Post']['title']);
		echo $this->Html->link($post['Post']['title'],'/posts/view/'.$post['Post']['id']);
		?>
		<?php echo $this->Html->link('編集', array('action'=>'edit', $post['Post']['id'])); ?> 
		<?php
			// echo $this->Form->postLink('削除', array('action'=>'delete', $post['Post']['id']), array('confirm'=>'sure?'));
			echo $this->Html->link('削除', '#', array('class'=>'delete', 'data-post-id'=>$post['Post']['id']));
		?>
	</li>
	<?php endforeach; ?>
</ul>

<h2>Add Post</h2>
<?php echo $this->Html->link('Add post', array('controller'=>'posts','action'=>'add'));
?>
<script>
$(function(){
	$('a.delete').click(function(e){
		if(confirm('sure?')){
			$.post('/onesway/047/cakephp-2.7.5/posts/delete/'+$(this).data('post-id'), {}, function(res){
				$('#post_'+res.id).fadeOut();
			}, "json");
		}
		return false;
	});
});
</script>