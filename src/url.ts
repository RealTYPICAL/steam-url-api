import * as opn from 'opn';
import { STEAM_URL } from './constants';

export class URL {

    private static readonly BASE_URL = STEAM_URL + 'url/';

    public chatBanListAdmin(page?: string): void {
        page ? opn(URL.BASE_URL + 'ChatBanListAdmin/' + page)
            : opn(URL.BASE_URL + 'ChatBanListAdmin');
    }

    public commentNotifications(): void {
        opn(URL.BASE_URL + 'CommentNotifications');
    }

    public communityFilePage(id: string): void {
        opn(URL.BASE_URL + 'CommunityFilePage/' + id);
    }

    public communityFriendsThatPlay(id: string): void {
        opn(URL.BASE_URL + 'CommunityFilePage/' + id);
    }

    public communityGroupSearch(searchTerm: string): void {
        opn(URL.BASE_URL + 'CommunityGroupSearch/' + searchTerm);
    }

    public communityHome(): void {
        opn(URL.BASE_URL + 'CommunityHome/');
    }

    public communitySearch(): void {
        opn(URL.BASE_URL + 'CommunitySearch/');
    }

    public downloadsSupportInfo(): void {
        opn(URL.BASE_URL + 'DownloadsSupportInfo');
    }

    public gameHub(id: string): void {
        opn(URL.BASE_URL + 'GameHub/' + id);
    }

    public groupEventsPage(id: string): void {
        opn(URL.BASE_URL + 'GroupEventsPage/' + id);
    }

    public groupSteamIDPage(id: string): void {
        opn(URL.BASE_URL + 'GroupSteamIDPage/' + id);
    }

    public groupSteamIDAdmin(id: string): void {
        opn(URL.BASE_URL + 'GroupSteamIDAdmin' + id);
    }

    public leaveGroupPage(): void {
        opn(URL.BASE_URL + 'LeaveGroupPage');
    }

    public legalInformation(): void {
        opn(URL.BASE_URL + 'LegalInformation');
    }

    public privacyPolicy(): void {
        opn(URL.BASE_URL + 'PrivacyPolicy');
    }

    public ssa(): void {
        opn(URL.BASE_URL + 'SSA');
    }

    public steamIDAchievementsPage(id: string): void {
        opn(URL.BASE_URL + 'SteamIDAchievementsPage/' + id);
    }

    public steamIDControlPage(): void {
        opn(URL.BASE_URL + 'SteamIDControlPage');
    }

    public steamIDEditPage(): void {
        opn(URL.BASE_URL + 'SteamIDEditPage');
    }

    public steamIDFriendsPage(): void {
        opn(URL.BASE_URL + 'SteamIDFriendsPage');
    }

    public steamIDLoginPage(pass: string): void {
        opn(URL.BASE_URL + 'SteamIDLoginPage/' + pass);
    }

    public steamIDMyProfile(): void {
        opn(URL.BASE_URL + 'SteamIDMyProfile');
    }

    public steamWorkshop(): void {
        opn(URL.BASE_URL + 'SteamWorkshop');
    }

    public steamWorkshopPage(id: string): void {
        opn(URL.BASE_URL + 'SteamWorkshopPage/' + id);
    }

    public steamGreenLight(id: string): void {
        opn(URL.BASE_URL + 'SteamGreenLight');
    }

    public store(): void {
        opn(URL.BASE_URL + 'Store');
    }

    public storeAccount(): void {
        opn(URL.BASE_URL + 'StoreAccount');
    }

    public storeAppPage(appId: string): void {
        opn(URL.BASE_URL + 'StoreAppPage/' + appId);
    }

    public storeFront(): void {
        opn(URL.BASE_URL + 'Storefront');
    }

    public storeFrontPage(): void {
        opn(URL.BASE_URL + 'StoreFrontPage');
    }
}
