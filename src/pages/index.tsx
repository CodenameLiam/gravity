import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import Planet from '../components/Planet';

const darkContent = css`
	background-color: black;
	color: white;
`;

const lightContent = css`
	background-color: tan;
	color: black;
`;

interface ContainerProps {
	dark?: boolean;
}

// const Container = styled.div<ContainerProps>`
// 	${props => (props.dark ? darkContent : lightContent)}
// `;

interface AnimateWordProps {
	delay: number;
}

const AnimateWord = styled.span<AnimateWordProps>`
	/* opacity: 0; */
	/* perspective: 600px; */
	transform-style: preserve-3d;
	transform: translate3d(0px, 100%, 100px) rotateX(-70deg);
	will-change: transform;
	animation-delay: ${props => `calc(${props.delay} * 100ms)`};

	animation: fadeIn 1s ease forwards;
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Parent = styled.div`
	height: 100vh;
	width: 100vw;
	/* display: flex;
	align-items: center; */
	/* place-items: center; */
`;

interface ContainerProps {
	flex?: boolean;
}

const Container = styled.div<ContainerProps>`
	padding: 0rem 10rem;
	column-gap: 1.5rem;
	/* max-width: 85rem; */

	${props =>
		props.flex
			? css`
					display: flex;
					flex-wrap: wrap;
			  `
			: css`
					white-space: pre-wrap;
			  `}
`;

const Card = styled.div<AnimateWordProps>`
	/* background-color: salmon; */
	transform-style: preserve-3d;
	transform: rotateX(-90deg) translateX(2rem);

	animation: flipIn 1s ease forwards;
	animation-delay: ${props => `calc(${props.delay} * 100ms)`};

	@keyframes flipIn {
		from {
			transform: rotateX(-90deg) translateX(2rem);
		}
		to {
			transform: rotateX(0deg) translateX(0rem);
		}
	}
`;

const Content = styled.div<AnimateWordProps>`
	font-size: 6rem;
	transform-style: preserve-3d;
	transform: translateZ(6rem);
	opacity: 0;
	animation: fadeIn 1s ease forwards;
	animation-delay: ${props => `calc(${props.delay} * 100ms)`};

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const GlobalStyles = css`
	body {
		margin: 0em;
		background-color: black;
		color: white;
		@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
		font-family: 'Poppins', sans-serif;
		/* font-weight: 200; */
	}
`;

// const Header = styled.header`
// 	height: 100px;
// 	width: 100%;
// 	background-color: salmon;
// 	position: fixed;
// 	top: 0;
// `;

const Main = styled.main`
	height: 200vh;
`;

const BannerContent = styled.div`
	position: relative;
	padding: 100px;
`;

const Banner = styled.section`
	height: 700px;
	/* background-color: white; */
	display: grid;
	column-gap: 1px;
	grid-template-columns: 3fr 2fr;

	${BannerContent} {
		border-bottom: 1px solid white;
		&:nth-child(odd) {
			border-right: 1px solid white;
		}
	}
`;

const Page = styled.div`
	display: grid;
	grid-template-rows: 100px 1fr 1fr;
`;

const Header = styled.header`
	position: sticky;
	top: 0;
	border-bottom: 1px solid white;
`;

const BannerImage = styled.div`
	position: absolute;
	height: 800px;
	width: 100vw;
	bottom: 0;
	background-color: skyblue;
`;

const IndexPage: FC = () => (
	<Page>
		<Global styles={GlobalStyles} />
		<Header>Header</Header>
		<Main>
			<Banner>
				<BannerContent>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
				</BannerContent>
				<BannerContent>Sub</BannerContent>
				<BannerContent>Sub</BannerContent>
				<BannerContent>Sub</BannerContent>
			</Banner>
		</Main>
		<footer>Footer</footer>
	</Page>
);

export default IndexPage;

// <Parent>
/* <Header />
		<Main>Some shit</Main> */
/* <Container flex>
			{'We see the opportunity in data. We are Max Kelsen'.split(' ').map((word, index) => (
				<Card delay={index}>
					<Content delay={index}>{word} </Content>
				</Card>
			))}
		</Container> */
/* <Content>We see the opportunity in data.</Content> */

/* <Container dark>Test</Container>
		<h1 style={{ display: 'flex', fontSize: 80 }}>
			{'hello friends and welcome to my YouTube Chanel'.split(' ').map((word, index) => (
				<AnimateWord delay={index}>{word} </AnimateWord>
			))}
		</h1> */
// </Parent>
