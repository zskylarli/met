// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'
import React from 'react';
import SearchForm from '../components/search';

export default function Page() {

  return (
    <div>
			<SearchForm />

			<style jsx global>{`
			@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
			@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
					Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
					sans-serif;
				font-family: 'Bitter', serif;
			}

			* {
				box-sizing: border-box;
			}
		`}</style>
		</div>  
  )
}

// Page.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }

