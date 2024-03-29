const state = {
	news: []
};
const getters = {
	get_news: (state) => state.news,
	get_selectedNews: (state) => state.selectedNews
};

const actions = {
	initNews({ commit }) {
		commit('SET_NEWS');
	},

	insertNews({ commit }, { vm, news }) {
		commit('NEW_ITEM', news);
		vm.$toast.success('News Successfully Added.', {
			position: 'top-right',
			duration: 5000
		});
	},

	updateNews({ commit }, { vm, news }) {
		commit('UPDATE_ITEM', news);
		vm.$toast.success('News Successfully Updated.', {
			position: 'top-right',
			duration: 5000
		});
	},

	deleteNews({ commit }, { vm, news_id }) {
		commit('DELETE_NEWS', news_id);
		vm.$toast.success('News Successfully Deleted.', {
			position: 'top-right',
			duration: 5000
		});
	}
};
const mutations = {
	SET_NEWS: (state, news) => {
        let savedNews =JSON.parse(localStorage.getItem('news'));

		state.news =savedNews != null ? savedNews : [];
	},
	NEW_ITEM: (state, news) => {
		state.news.unshift(news);
		localStorage.setItem('news', JSON.stringify(state.news));
	},

	UPDATE_ITEM: (state, news) => {
		var index = state.news.findIndex(function(item, i) {
			return item.id === news.id;
		});
		state.news[index] = news;
		localStorage.setItem('news', JSON.stringify(state.news));
	},

	DELETE_NEWS: (state, news_id) => {
		state.news = state.news.filter((item) => item.id !== news_id);
		localStorage.setItem('news', JSON.stringify(state.news));
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
