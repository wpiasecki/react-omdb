import AuthStore from './AuthStore';

let authStore;

beforeEach(() => {
	authStore = new AuthStore();
});


it('login successful', () => {
	authStore.login('echo', 'echo');
	expect(authStore.loggedUser).toEqual('echo');
});

it('is logged', () => {
	localStorage.setItem('loggedUser', 'echo');
	expect(authStore.isLogged()).toEqual(true);
});

it ('logout successful', () => {
	authStore.logout();
	expect(authStore.loggedUser).toBeNull();
});
