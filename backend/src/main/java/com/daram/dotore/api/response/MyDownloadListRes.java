package com.daram.dotore.api.response;

import com.daram.dotore.db.entity.Download;
import com.daram.dotore.db.entity.Items;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@ApiModel("MyDownloadListResponse")
public class MyDownloadListRes extends BaseRes {

    private List<ItemListVO> data = new ArrayList<>();

    public static MyDownloadListRes of(String result) {
        MyDownloadListRes res = new MyDownloadListRes();
        res.setResult(result);

        return res;
    }

    public static MyDownloadListRes of(String result, List<Items> list) {
        MyDownloadListRes res = new MyDownloadListRes();
        res.setResult(result);
        for (int i = 0; i < list.size(); i++) {
            res.getData()
                .add(new ItemListVO(
                        //nickname,
                        list.get(i).getTokenId(),
                        list.get(i).getItem_hash(),
                        list.get(i).getItem_title(),
                        list.get(i).getItem_description(),
                        list.get(i).getCreated_at(),
                        list.get(i).getOwner_address(),
                        list.get(i).getIsFirst()
                ));
        }
        return res;
    }
}