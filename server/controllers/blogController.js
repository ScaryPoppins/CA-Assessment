
// import thinkBoard from '../../../src/Components/Images/thinkBoard.JPG'
// import codeAuthority from '../../../src/Components/Images/codeAuthority.JPG'

const blogItems = [
    {
        image: 'src={thinBoard}',
        blogText: 'So you want to work at Code Authority'
    },
    {
        image: 'src={codeAuthority}',
        blogText: 'Become the best developer you can be'
    }
]




const blog = (req, res) => {
    res.json(blogItems);
  };

  module.exports = {
    blog
};