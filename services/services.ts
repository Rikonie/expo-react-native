import {HttpClient} from "./api/http-client";
import {IAuthService} from "./auth-service";
import {IChargesService} from "./charges-service";
import {IItemGroupsService} from "./item-groups-service";
import {IRoomNumbersService} from "./room-numbers-service";
import {IFilterService} from "./filter-service";
import {IItemsService} from "./items-service";
import {INewItemService} from "./new-issued-item-service";
import {ISetStatusService} from "./set-status-service";
import {IGetGuestService} from "./get-guest-service";

export interface Services {
    httpClient: HttpClient,
    authService: IAuthService,
    chargesService: IChargesService,
    itemGroupsService: IItemGroupsService,
    roomNumbersService: IRoomNumbersService,
    filterService: IFilterService,
    itemsService: IItemsService,
    newItemService: INewItemService,
    setStatusService: ISetStatusService,
    getGuestService: IGetGuestService
}