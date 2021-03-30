import styles from './style.module.css'


const Main = () => {
    return (
        <main className={styles.main}>
			<section className={styles.leftcolumn}>
				<article className={styles.artykul}>
					<h2>Jak zacząć programować?</h2>
					<div className={styles.zdjecie}>Image</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere, elit at imperdiet finibus, elit odio vehicula arcu, dapibus semper sapien libero ac leo. Pellentesque efficitur ante eu nisi laoreet consequat. Fusce in tellus eget nunc dignissim tincidunt ac ac sem. Etiam non lobortis mi, at convallis lectus. Quisque in metus nulla. Nullam id mi vel quam commodo malesuada vitae in justo. In hac habitasse platea dictumst. Mauris cursus eros lectus, vitae blandit nunc bibendum in. Maecenas vitae gravida odio. Morbi enim metus, ornare eget lacus nec, malesuada ultrices justo. Proin non neque tempor ante tristique posuere eget a velit. Vestibulum bibendum volutpat dolor sed laoreet. Aliquam laoreet dui quis velit tincidunt semper ac ac lacus. Sed mauris enim, bibendum non sodales vitae, eleifend ac dui. In et vestibulum magna, a blandit libero. Sed rutrum sem quis elementum vulputate. Proin elementum elementum cursus. Aenean aliquam condimentum elit, non ornare lacus commodo ut.</p>
				</article>
				<article className={styles.artykul}>
					<h2>Jak rozpocząć swoją pierwszą działalność gospodarczą?</h2>
					<div className={styles.zdjecie}>Image</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere, elit at imperdiet finibus, elit odio vehicula arcu, dapibus semper sapien libero ac leo. Pellentesque efficitur ante eu nisi laoreet consequat. Fusce in tellus eget nunc dignissim tincidunt ac ac sem. Etiam non lobortis mi, at convallis lectus. Quisque in metus nulla. Nullam id mi vel quam commodo malesuada vitae in justo. In hac habitasse platea dictumst. Mauris cursus eros lectus, vitae blandit nunc bibendum in. Maecenas vitae gravida odio. Morbi enim metus, ornare eget lacus nec, malesuada ultrices justo. Proin non neque tempor ante tristique posuere eget a velit. Vestibulum bibendum volutpat dolor sed laoreet. Aliquam laoreet dui quis velit tincidunt semper ac ac lacus. Sed mauris enim, bibendum non sodales vitae, eleifend ac dui. In et vestibulum magna, a blandit libero. Sed rutrum sem quis elementum vulputate. Proin elementum elementum cursus. Aenean aliquam condimentum elit, non ornare lacus commodo ut.</p>
				</article>
			</section>
			<aside className={styles.rightcolumn}>
				<div className={styles.artykul}>
					<h2>O mnie...</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere, elit at imperdiet finibus, elit odio vehicula arcu, dapibus semper sapien libero ac leo. Pellentesque efficitur ante eu nisi laoreet consequat. Fusce in tellus eget nunc dignissim tincidunt ac ac sem. Etiam non lobortis mi, at convallis lectus. Quisque in metus nulla. Nullam id mi vel quam commodo malesuada vitae in justo. In hac habitasse platea dictumst.</p>
				</div>
				<div className={styles.artykul}>
					<h2>Popularne artykuły</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>Cras posuere, elit at imperdiet finibus, elit odio vehicula arcu, dapibus semper sapien libero ac leo.</p>
						<p>Pellentesque efficitur ante eu nisi laoreet consequat.</p>
				</div>
				<div className={styles.artykul}>
					<h2>Zobacz co u mnie słychać</h2>
					<p>Facebook</p>
					<p>Youtube</p>
					<p>Twitter</p>
				</div>
			</aside>
		</main>
    )
}

export default Main