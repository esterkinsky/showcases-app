import React from 'react';

function Footer() {
	return <footer className="page-footer purple lighten-4">
		<div className="footer-copyright">
			<div className="container">
				© 2022 - {new Date().getFullYear()} copyright text
			</div>
		</div>
	</footer>
};

export { Footer }