import './css/style.min.css'

function App() {
  return (
<>

<header class="showcase">
			<div class="container">
				<nav>
					<h1 class="logo">SASS-styled website</h1>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>
					</ul>
				</nav>

				<div class="showcase-content">
					<div>
						<h1>Hello, Syntactically Awesome Style Sheets!</h1>
						<p class="my-1">
						Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml &mdash; Wikipedia
						</p>
						<a href="#" class="btn-primary">Learn More</a>
						<a href="#" class="btn-secondary">Sign Up</a>
					</div>
					<img
						src="https://themesbrand.com/zooki/layouts/images/home-2-img.png"
					/>
				</div>
			</div>
		</header>

</>
  );
}

export default App
