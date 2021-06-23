import React, { FC } from 'react';
import { Link } from 'gatsby';

const NotFoundPage: FC = () => (
	<div>
		You've hit the void. <Link to="/">Go back.</Link>
	</div>
);

export default NotFoundPage;
