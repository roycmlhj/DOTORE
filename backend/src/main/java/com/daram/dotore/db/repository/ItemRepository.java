package com.daram.dotore.db.repository;

import com.daram.dotore.db.entity.Items;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<Items, BigInteger> {

    Optional<Items> findByTokenId(BigInteger tokenId);

    Optional<Items> findByItemTrxHash(String itemTrxHash);

    List<Items> findByIsFirstAndStatus(boolean isFirst, String status);

    List<Items> findByOnSaleYn(boolean onSaleYn);

    List<Items> findByStatus(String status);

    @Query(value = "SELECT i.item_trx_hash, i.token_id, i.item_hash, i.item_title, i.item_description, i.created_at, i.author_address, i.owner_address, i.on_sale_yn, i.is_first, i.format, i.status "
        + "FROM items i JOIN secondary s ON i.token_id=s.token_id "
        + "WHERE s.original = :ori", nativeQuery = true)
    List<Items> getSecond(@Param("ori") BigInteger original);

    @Query(value = "SELECT i.item_trx_hash, i.token_id, i.item_hash, i.item_title, i.item_description, i.created_at, i.author_address, i.owner_address, i.on_sale_yn, i.is_first, i.format, i.status "
        + "FROM items i JOIN secondary s ON i.token_id=s.original "
        + "WHERE s.token_id = :tokenId", nativeQuery = true)
    List<Items> getFirst(@Param("tokenId") BigInteger tokenId);

    @Query(value = "SELECT * "
            + "FROM items "
            + "WHERE owner_address = :address", nativeQuery = true)
    List<Items> getItemList(@Param("address") String address);

    @Query(value = "SELECT * "
        + "FROM items "
        + "WHERE author_address = :address and token_id is null ", nativeQuery = true)
    List<Items> getPendingItemList(@Param("address") String address);

    @Query(value = "SELECT * "
            + "FROM items "
            + "WHERE author_address = :address", nativeQuery = true)
    List<Items> getAuthorItemList(@Param("address") String address);
}
