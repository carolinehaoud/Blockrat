from beaker import *
from pyteal import *
from typing import Final

class Blockrat(Application):
    viewer: Final[ApplicationStateValue] = ApplicationStateValue(
        stack_type=TealType.bytes,
        default=Bytes(""),
        descr="Address of the viewer",
    )

    geo_location: Final[ApplicationStateValue] = ApplicationStateValue(
        stack_type=TealType.bytes,
        default=Bytes(""),
        descr="Geo Location Data",
    )

    # validation_code: Final[ApplicationStateValue] = ApplicationStateValue(
    #     stack_type=TealType.bytes, 
    #     default=Bytes(""), 
    #     descr="Validation Code In Hash"
    # )

    @create
    def create(self):
        return self.initialize_application_state()
    
    @external(authorize=Authorize.only(Global.creator_address()))
    def opt_into_asset(self, asset: abi.Asset):
        return Seq(
            InnerTxnBuilder.Execute(
                {
                    TxnField.type_enum: TxnType.AssetTransfer,
                    TxnField.asset_receiver: Global.current_application_address(),
                    TxnField.xfer_asset: asset.asset_id(),
                    TxnField.asset_amount: Int(0),
                    TxnField.fee: Int(0),
                }
            ),
        )
    
    @external(authorize=Authorize.only(Global.creator_address()))
    def submission(self, asset:abi.Asset, viewer: abi.Account, geo: abi.String):
        return Seq(
            self.geo_location.set(geo.get()),
            InnerTxnBuilder.Execute(
                {
                    TxnField.type_enum: TxnType.AssetTransfer,
                    TxnField.asset_receiver: viewer.address(),
                    TxnField.xfer_asset: asset.asset_id(),
                    TxnField.asset_amount: Int(100),
                    TxnField.fee: Int(0),
                }
            ),
        )
    
    @external
    def claim_asset(self, asset: abi.Asset, recipient: abi.Account):
        return Seq(
            InnerTxnBuilder.Execute(
                {
                    TxnField.type_enum: TxnType.AssetTransfer,
                    TxnField.fee: Int(0),
                    TxnField.xfer_asset: asset.asset_id(),
                    TxnField.asset_receiver: recipient.address(), 
                }
            ),
            Approve()
        )
    
blockrat_instance = Blockrat(version=8)
blockrat_instance.dump()